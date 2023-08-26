"use client";

import { createUrl } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const CollectionItem = ({ title, path }: { title: string; path: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());
  const isActive = pathname === path;

  return (
    <li>
      <Link
        href={createUrl(path, newParams)}
        className={`d-flex py-2 text-gray justify-content-between ${
          isActive ? "active" : ""
        }`}
      >
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default CollectionItem;
