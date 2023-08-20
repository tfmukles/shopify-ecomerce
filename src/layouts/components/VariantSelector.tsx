"use client";

import { ProductOption, ProductVariant } from "@/lib/shopify/types";
import { useState } from "react";
import AddToCart from "./AddToCart";

const VariantSelector = ({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) => {
  const [productOption, setProdcutOption] = useState({});

  const onProdcutOptionChange = (e: any) => {
    const { name, value } = e.target;
    setProdcutOption((prevOption) => ({ ...prevOption, [name]: value }));
  };

  const selectedVariant = variants.find((variant) =>
    variant.selectedOptions.every(
      (option) => option.value === (productOption as any)[option.name],
    ),
  );

  return (
    <>
      {options.map((option, index) => {
        return (
          <div className="mb-3" key={index}>
            <label className="p-2">{option.name} </label>
            <select
              onChange={onProdcutOptionChange}
              className="p-2 text-lg"
              name={option.name}
            >
              <option value="">Select {option.name}</option>
              {option.values.map((value, i) => (
                <option value={value} key={i}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        );
      })}
      <AddToCart selectedVariant={selectedVariant} />
    </>
  );
};

export default VariantSelector;
