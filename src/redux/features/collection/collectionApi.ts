import { Product } from "@/lib/shopify/types";
import { shopifyApiSlice } from "@/redux/api/shopifySlice";

const collectionApi = shopifyApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCollections: build.query<Product[], string>({
      query: (name) => ({
        url: `/collections/${name}`,
        method: "get",
      }),
    }),
  }),
});

export const { useGetCollectionsQuery } = collectionApi;
