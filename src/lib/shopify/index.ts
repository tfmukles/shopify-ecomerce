import { HIDDEN_PRODUCT_TAG, SHOPIFY_GRAPHQL_API_ENDPOINT } from "../constants";
import { isObject, isShopifyError } from "../type-gurds";
import { ensureStartsWith } from "../utils";
import { captureError } from "../utils/captureError";
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "./mutations/cart";
import {
  createCustomerMutation,
  getCustomerAccessTokenMutation,
  getUserDetailsQuery,
} from "./mutations/customer";
import { getCartQuery } from "./queries/cart";
import {
  getCollectionProductsQuery,
  getCollectionsQuery,
} from "./queries/collection";
import { getOrder } from "./queries/order";
import { getProductQuery, getProductsQuery } from "./queries/product";
import {
  Cart,
  Collection,
  Connection,
  CustomerInput,
  Image,
  Order,
  Product,
  ShopifyAddToCartOperation,
  ShopifyCart,
  ShopifyCartOperation,
  ShopifyCollection,
  ShopifyCollectionProductsOperation,
  ShopifyCollectionsOperation,
  ShopifyCreateCartOperation,
  ShopifyOrder,
  ShopifyOrderOperation,
  ShopifyProduct,
  ShopifyProductOperation,
  ShopifyProductsOperation,
  ShopifyRemoveFromCartOperation,
  ShopifyUpdateCartOperation,
  pageInfo,
  registerOperation,
  user,
  userOperation,
} from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://")
  : "";

const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export async function shopifyFetch<T>({
  cache = "no-cache",
  headers,
  query,
  tags,
  variables,
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    const errorMessages = captureError(body) as any;
    const hasErrors = isObject(errorMessages)
      ? Object.keys(errorMessages)?.length > 0
      : errorMessages?.length > 0;

    if (hasErrors) {
      throw errorMessages;
    }

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || "unknown",
        status: e.status || 500,
        message: e.message,
        query,
      };
    }

    throw {
      error: e,
      query,
    };
  }
}

const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};

const reshapeImages = (images: Connection<Image>, productTitle: string) => {
  const flattened = removeEdgesAndNodes(images);
  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`,
    };
  });
};

const reshapeProduct = (
  product: ShopifyProduct,
  filterHiddenProducts: boolean = true,
) => {
  if (
    !product ||
    (filterHiddenProducts && product.tags?.includes(HIDDEN_PRODUCT_TAG))
  ) {
    return undefined;
  }
  const { images, variants, ...rest } = product;
  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants),
  };
};

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

export async function getProducts({
  query,
  reverse,
  filterKey,
  cursor,
}: {
  query?: string;
  reverse?: boolean;
  filterKey?: string;
  cursor?: string;
}): Promise<{ pageInfo: pageInfo; products: Product[] }> {
  const res = await shopifyFetch<ShopifyProductsOperation>({
    query: getProductsQuery,
    variables: {
      query,
      reverse,
      filterKey,
      cursor,
    },
    cache: "force-cache",
  });

  const pageInfo = res.body.data?.products?.pageInfo;
  // console.log(JSON.stringify(res.body.data.products));

  return {
    pageInfo,
    products: reshapeProducts(removeEdgesAndNodes(res.body.data.products)),
  };
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<ShopifyProductOperation>({
    query: getProductQuery,
    variables: {
      handle,
    },
  });
  return reshapeProduct(res.body.data.product, false);
}

export async function createCustomer(input: CustomerInput): Promise<user> {
  const res = await shopifyFetch<registerOperation>({
    query: createCustomerMutation,
    variables: {
      input,
    },
    cache: "no-store",
  });

  return res.body.data.customerCreate.customer;
}

export async function getCustomerAccessToken({
  email,
  password,
}: Partial<CustomerInput>): Promise<any> {
  const res = await shopifyFetch<any>({
    query: getCustomerAccessTokenMutation,
    variables: { input: { email, password } },
  });

  const token =
    res.body.data?.customerAccessTokenCreate?.customerAccessToken?.accessToken;

  return token;
}
const reshapeCart = (cart: ShopifyCart): Cart => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: "0.0",
      currencyCode: "USD",
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines),
  };
};

export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<ShopifyCreateCartOperation>({
    query: createCartMutation,
    cache: "no-store",
  });
  return reshapeCart(res.body.data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  variantId: string,
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines: [{ merchandiseId: variantId, quantity: 1 }],
    },
  });

  return reshapeCart(res.body.data.cartLinesAdd.cart);
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
    cache: "no-store",
  });

  return reshapeCart(res.body.data.cart);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines,
    },
    cache: "no-store",
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[],
): Promise<Cart | any> {
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds,
    },
    cache: "no-store",
  });
  return reshapeCart(res.body.data.cartLinesRemove.cart);
}

const reshapeOrders = (orders: Connection<ShopifyOrder>): Order[] => {
  const data = removeEdgesAndNodes(orders);
  return data.map((order) => {
    if (order.lineItems) {
      return { ...order, lineItems: removeEdgesAndNodes(order.lineItems) };
    }
    return order;
  });
};

export async function getOrders(token: string): Promise<Order[]> {
  const res = await shopifyFetch<ShopifyOrderOperation>({
    query: getOrder,
    variables: { token },
    cache: "no-store",
  });

  return reshapeOrders(res.body.data.customer.orders);
}

export async function getUserDetails(accessToken: string): Promise<user> {
  const response = await shopifyFetch<userOperation>({
    query: getUserDetailsQuery,
    variables: {
      input: accessToken,
    },
    cache: "no-store",
  });

  return response.body.data;
}

const reshapeCollection = (
  collection: ShopifyCollection,
): Collection | undefined => {
  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    path: `/products/${collection.handle}`,
  };
};

const reshapeCollections = (collections: ShopifyCollection[]) => {
  const reshapedCollections = [];

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<ShopifyCollectionsOperation>({
    query: getCollectionsQuery,
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    {
      handle: "",
      title: "All",
      description: "All products",
      seo: {
        title: "All",
        description: "All products",
      },
      path: "/products",
      updatedAt: new Date().toISOString(),
    },

    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith("hidden"),
    ),
  ];

  return collections;
}

export async function getCollectionProducts({
  collection,
  reverse,
  filterKey,
}: {
  collection: string;
  reverse?: boolean;
  filterKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
      reverse,
      filterKey: filterKey === "CREATED_AT" ? "CREATED" : filterKey,
    },
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  const data = reshapeProducts(
    removeEdgesAndNodes(res.body.data.collection.products),
  );

  return data;
}
