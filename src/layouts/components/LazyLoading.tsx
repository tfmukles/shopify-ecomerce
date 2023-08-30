"use client";

import { pageInfo } from "@/lib/shopify/types";
import { useEffect, useRef } from "react";

const LazyLoading = ({
  endCursor,
  hasNextPage,
  hasPreviousPage,
  children,
}: {
  children: React.ReactNode;
} & pageInfo) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref.current);
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
    });

    if (ref.current) observer.observe(ref.current);
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default LazyLoading;
