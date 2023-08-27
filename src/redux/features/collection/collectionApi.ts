import { Collection } from "@/lib/shopify/types";
import { shopifyApiSlice } from "@/redux/api/shopifySlice";

const collectionApi = shopifyApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCollections: build.query<Collection[], void>({
      query: () => ({
        url: "/collections",
        method: "get",
        params: "hidden-homepage-carousel",
      }),
    }),
  }),
});

export const { useGetCollectionsQuery } = collectionApi;
