import LazyLoading from "@/components/LazyLoading";
import Product from "@/components/Product/Index";
import {
  defaultFiltering,
  defaultSort,
  filtering,
  sorting,
} from "@/lib/constants";
import { getProducts } from "@/lib/shopify";
import { sortProducts } from "@/lib/utils";
import { Metadata } from "next";

export const runtime = "edge";

let product = [];

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> => {
  const { filter, sort, q } = searchParams as { [key: string]: string };
  const { filterKey, reverse } =
    filtering.find((item) => item.slug === filter) || defaultFiltering;
  const { products, pageInfo } = await getProducts({
    filterKey,
    reverse,
    query: q,
  });
  return {
    title: "title-upcoming",
    description: "description",
  };
};

const Products = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { filter, sort, q, cursor } = searchParams as { [key: string]: string };
  const { filterKey, reverse } =
    filtering.find((item) => item.slug === filter) || defaultFiltering;
  const { products, pageInfo } = await getProducts({
    filterKey,
    reverse,
    query: q,
    cursor,
  });

  const { direction } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const filterProducts = sortProducts(products, direction);

  if (filterProducts.length <= 0) {
    return <h1 className="text-center mt-5">No products</h1>;
  }

  return (
    <>
      <LazyLoading
        hasNextPage={pageInfo.hasNextPage}
        hasPreviousPage={pageInfo.hasPreviousPage}
        endCursor={pageInfo.endCursor}
      >
        <div className="row products-lists">
          {filterProducts.map((product, index) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </LazyLoading>
    </>
  );
};

export default Products;
