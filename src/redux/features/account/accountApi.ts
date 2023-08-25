import { shopifyApiSlice } from "@/redux/api/shopifySlice";
import { toast } from "react-toastify";
import { setUserDetials } from "./accountSlice";

export const cartApi = shopifyApiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({ url: "/customer/login", method: "post", data }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          dispatch(setUserDetials(response));
          toast.success("Login successfully!");
        } catch (error: any) {
          toast.error(error.error.data);
        }
      },
    }),

    register: build.mutation({
      query: (data) => ({ url: "/customer/register", method: "post", data }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          dispatch(setUserDetials(response));
          toast.success("Account created successfully!");
        } catch (error: any) {
          console.log(error);
          toast.error(error.error.data);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = cartApi;
