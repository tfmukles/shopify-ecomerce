"use client";

import { ProductVariant } from "@/lib/shopify/types";
import { useAddCartMutation } from "@/redux/features/cart/cartApi";

const AddToCart = ({
  selectedVariant,
  className,
}: {
  selectedVariant?: ProductVariant;
  className?: string;
}) => {
  const [addCartItem, { isLoading }] = useAddCartMutation();
  const addCart = () => {
    if (!selectedVariant?.availableForSale) return;
    addCartItem(selectedVariant.id);
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
      disabled={!selectedVariant?.availableForSale || isLoading}
      className={`btn btn-primary mb-4 ${className}`}
    >
      {title}
    </button>
  );
};

export default AddToCart;
