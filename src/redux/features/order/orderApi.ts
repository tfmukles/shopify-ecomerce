import { Order } from "@/lib/shopify/types";
import { shopifyApiSlice } from "@/redux/api/shopifySlice";

export const OrderApi = shopifyApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getOrderLists: build.query<Order[], string>({
      query: (token) => ({
        url: "/order/list",
        method: "get",
        data: { token },
      }),
    }),
  }),
});

export const { useGetOrderListsQuery } = OrderApi;
