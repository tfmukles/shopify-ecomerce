"use client";

import { useUpdateItemQuantityMutation } from "@/redux/features/cart/cartApi";

const EditType = ({
  variantId,
  quantity,
  lineId,
  type,
}: {
  variantId: string;
  quantity: number;
  lineId: string;
  type: "minus" | "plus";
}) => {
  const [updateProductQuantity, { isLoading }] =
    useUpdateItemQuantityMutation();
  return (
    <button
      disabled={isLoading}
      className="border-0"
      onClick={() =>
        updateProductQuantity({
          variantId,
          quantity: type === "minus" ? quantity - 1 : quantity + 1,
          lineId,
        })
      }
    >
      {type === "minus" ? "-" : "+"}
    </button>
  );
};

export default EditType;
