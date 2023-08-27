export type FilterItem = {
  title: string;
  slug: string | null;
  filterKey: "RELEVANCE" | "BEST_SELLING" | "CREATED_AT" | "PRICE";
  reverse: boolean;
};

export type SortItem = {
  title: string;
  slug: string | null;
  sortKey: "TITLE";
  direction: "DESC" | "ASC" | "NONE";
};

export const defaultFiltering: FilterItem = {
  title: "Relevance",
  slug: null,
  filterKey: "RELEVANCE",
  reverse: false,
};

export const defaultSort: SortItem = {
  title: "none",
  slug: null,
  sortKey: "TITLE",
  direction: "NONE",
};

export const filtering: FilterItem[] = [
  defaultFiltering,
  {
    title: "Trending",
    slug: "trending-desc",
    filterKey: "BEST_SELLING",
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    filterKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    filterKey: "PRICE",
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    filterKey: "PRICE",
    reverse: true,
  },
];

export const sorting: SortItem[] = [
  defaultSort,
  {
    title: "A-Z",
    slug: "title-asc",
    sortKey: "TITLE",
    direction: "ASC",
  },
  {
    title: "Z-A",
    slug: "title-desc",
    sortKey: "TITLE",
    direction: "DESC",
  },
];

export const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
export const DEFAULT_OPTION = "Default Title";
export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-07/graphql.json";
