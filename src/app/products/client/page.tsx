"use client";

import Product from "@/components/Product/Index";
import useLoadMore from "@/hooks/useLoadMore";
import { defaultFiltering, filtering } from "@/lib/constants";
import { getProducts } from "@/lib/shopify";
import { pageInfo } from "@/lib/shopify/types";
import { useEffect, useRef, useState } from "react";

const Client = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [isLoainding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const targetElementRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<{
    products: Product[];
    pageInfo: pageInfo;
  }>({
    products: [],
    pageInfo: { endCursor: "", hasNextPage: false, hasPreviousPage: false },
  });

  const { filter, q, cursor } = searchParams as { [key: string]: string };
  const { filterKey, reverse } =
    filtering.find((item) => item.slug === filter) || defaultFiltering;

  useEffect(() => {
    setIsLoading(true);
    getProducts({
      filterKey,
      reverse,
      query: q,
      cursor,
    }).then((res) => {
      setIsLoading(false);
      setData({
        products: res.products,
        pageInfo: res.pageInfo,
      });
    });
  }, [cursor, filterKey, q, reverse]);

  const { products, pageInfo } = data;
  const { endCursor, hasNextPage } = pageInfo;

  useLoadMore(targetElementRef, () => {
    if (hasNextPage && !isLoainding) {
      setIsLoading(true);
      getProducts({
        filterKey,
        reverse,
        query: q,
        cursor: endCursor,
      }).then((res) => {
        setIsLoading(false);
        setData({
          products: [...products, ...res.products],
          pageInfo: res.pageInfo,
        });
      });
    }
  });

  return (
    <div ref={targetElementRef}>
      <div className="row products-lists">
        {products.map((product, index) => (
          <div className="col-lg-4 col-sm-6 mb-4" key={index}>
            <Product product={product} />
          </div>
        ))}
      </div>
      <p className={hasNextPage ? "text-center mt-5 opacity-100" : "opacity-0"}>
        Loading...
      </p>
    </div>
  );
};

export default Client;
