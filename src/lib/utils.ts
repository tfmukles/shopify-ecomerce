import { ReadonlyURLSearchParams } from "next/navigation";

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  // console.log({ paramsString });
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
};

function mergeSearchParams(params1: URLSearchParams, params2: URLSearchParams) {
  const mergedParams = new URLSearchParams(params1.toString()); // Clone params1

  params2.forEach((value, key) => {
    mergedParams.append(key, value);
  });

  return mergedParams;
}
