"use client";

import { ProductVariant } from "@/lib/shopify/types";
import { addCartItem } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useTransition } from "react";

const AddToCart = ({
  selectedVariant,
  className,
}: {
  selectedVariant?: ProductVariant;
  className?: string;
}) => {
  const [isPending, startTransition] = useTransition();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  // console.log({ cart, isPending });

  const addCart = () => {
    if (!selectedVariant?.availableForSale) return;
    startTransition(async () => {
      // call the item add
      await dispatch(addCartItem(selectedVariant.id));
      // const data = await addtoCart(selectedVariant.id);
      // console.log(data);
    });
  };

  const title =
    selectedVariant === undefined
      ? "Please Select Option"
      : selectedVariant?.availableForSale
      ? "Add To Cart"
      : "Sold Out";

  return (
    <button
      onClick={addCart}
      disabled={!selectedVariant?.availableForSale || isPending}
      className={`btn btn-primary mb-4 ${className}`}
    >
      {title}
    </button>
  );
};

export default AddToCart;
