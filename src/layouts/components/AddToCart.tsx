"use client";

import { ProductVariant } from "@/lib/shopify/types";
import { addCartItem } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
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

  const addCart = () => {
    if (!selectedVariant?.availableForSale) return;
    startTransition(async () => {
      await dispatch(addCartItem(selectedVariant.id)).unwrap();
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
