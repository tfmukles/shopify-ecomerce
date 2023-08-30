"use client";

import useLoadMore from "@/hooks/useLoadMore";
import { pageInfo } from "@/lib/shopify/types";
import { createUrl } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

const LazyLoading = ({
  endCursor,
  hasNextPage,
  hasPreviousPage,
  children,
}: {
  children: React.ReactNode;
} & pageInfo) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const targetElementRef = useRef<HTMLDivElement>(null);

  useLoadMore(targetElementRef, () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (hasNextPage) {
      newSearchParams.set("cursor", endCursor);
      router.push(createUrl(pathname, newSearchParams));
    }
  });

  return (
    <div className="ref" ref={targetElementRef}>
      {children}
    </div>
  );
};

export default LazyLoading;
