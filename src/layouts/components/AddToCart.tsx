"use client";

import { ProductVariant } from "@/lib/shopify/types";

const AddToCart = ({
  variants,
  availableForSale,
  className,
}: {
  variants?: ProductVariant[];
  availableForSale?: boolean;
  className?: string;
}) => {
  return (
    <button disabled={true} className={`btn btn-primary mb-4`}>
      Add To Cart
    </button>
  );
};

export default AddToCart;
