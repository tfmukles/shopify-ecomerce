import { Cart } from "@/lib/shopify/types";
import { shopifyApiSlice } from "@/redux/api/shopifySlice";
import { toast } from "react-toastify";

export const cartApi = shopifyApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCarts: build.query<Cart, void>({
      query: () => ({ url: "/cart/get", method: "get" }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error: any) {
          toast.error(error.error.data);
        }
      },
    }),

    addCart: build.mutation<Cart, string>({
      query: (variantId) => ({
        url: "/cart/add",
        method: "post",
        data: { variantId },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            cartApi.util.updateQueryData("getCarts", undefined, (draft) => {
              return data;
            }),
          );
          toast.success("Cart added successfully");
        } catch (error: any) {
          toast.error(error.error.data);
        }
      },
    }),

    updateItemQuantity: build.mutation<
      Cart,
      { variantId: string; quantity: number; lineId: string }
    >({
      query: (data) => {
        return { url: "/cart/update", method: "post", data };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            cartApi.util.updateQueryData("getCarts", undefined, (draft) => {
              return data;
            }),
          );
        } catch (error: any) {
          toast.error(error.error.data);
        }
      },
    }),

    removeCartItem: build.mutation<Cart, string[]>({
      query: (lineIds) => ({
        url: "/cart/remove",
        method: "post",
        data: { lineIds },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            cartApi.util.updateQueryData("getCarts", undefined, (draft) => {
              return data;
            }),
          );
        } catch (error: any) {
          toast.error(error.error.data);
        }
      },
    }),
  }),
});

export const {
  useGetCartsQuery,
  useAddCartMutation,
  useRemoveCartItemMutation,
  useUpdateItemQuantityMutation,
} = cartApi;
