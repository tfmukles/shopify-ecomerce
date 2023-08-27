import { ReadonlyURLSearchParams } from "next/navigation";
import { Product } from "./shopify/types";

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
};

export function sortProducts(
  products: Product[],
  direction?: "ASC" | "DESC" | "NONE",
) {
  return products.slice().sort((a, b) => {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();

    if (direction === "ASC") {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else if (direction === "DESC") {
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    }
    return 0;
  });
}
