"use client";

import { useTransition } from "react";

import { updateProductQuantity } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

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
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();
  return (
    <button
      disabled={isPending}
      className="border-0"
      onClick={() =>
        dispatch(
          updateProductQuantity({
            variantId,
            quantity: type === "minus" ? quantity - 1 : quantity + 1,
            lineId,
          }),
        )
      }
    >
      {type === "minus" ? "-" : "+"}
    </button>
  );
};

export default EditType;
