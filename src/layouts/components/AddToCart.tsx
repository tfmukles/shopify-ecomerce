"use client";

import { ProductVariant } from "@/lib/shopify/types";
import { useProvider } from "@/lib/state/context";
import { useTransition } from "react";

const AddToCart = ({
  selectedVariant,
  className,
}: {
  selectedVariant?: ProductVariant;
  className?: string;
}) => {
  const [isPending, startTransition] = useTransition();
  const {
    cart: { dispatch },
  } = useProvider();

  const addCart = () => {
    if (!selectedVariant?.availableForSale) return;
    startTransition(async () => {
      // call the item add
      const res = await fetch("/api/cart/add", {
        method: "POST",
        body: JSON.stringify({
          variantId: selectedVariant.id,
        }),
      });
      const data = await res.json();
      dispatch({ type: "success", payload: { ...data } });
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
