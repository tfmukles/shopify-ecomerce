"use client";

import { ProductVariant } from "@/lib/shopify/types";
import { useTransition } from "react";

const AddToCart = ({
  selectedVariant,
  className,
}: {
  selectedVariant?: ProductVariant;
  className?: string;
}) => {
  const [isPending, startTransition] = useTransition();

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
      console.log(data);
    });
  };

  return (
    <button
      onClick={addCart}
      disabled={!selectedVariant?.availableForSale || isPending}
      className={`btn btn-primary mb-4`}
    >
      {!selectedVariant?.availableForSale ? "Sold Out" : "Add To Cart"}
    </button>
  );
};

export default AddToCart;
