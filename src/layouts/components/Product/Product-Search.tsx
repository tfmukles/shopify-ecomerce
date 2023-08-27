"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { createUrl } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const ProductSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pendding, startTransition] = useTransition();
  const [terms, setTerms] = useState<string>(searchParams.get("q") || "");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerms(e.target.value);
  };

  useEffect(() => {
    let params = new URLSearchParams(searchParams.toString());
    if (terms) {
      params.set("q", terms);
    } else {
      params.delete("q");
    }
    startTransition(() => {
      router.push(createUrl(pathname, params));
    });
  }, [terms, pathname, searchParams, startTransition, router]);

  return (
    <div className="position-relative mb-5">
      <form action="#">
        <input
          value={terms}
          onChange={onChangeHandler}
          autoComplete="off"
          type="search"
          className="form-control rounded-0"
          id="search-product"
          placeholder="Search..."
        />
        <button type="submit" className="search-icon pr-3 r-0">
          <DynamicIcon icon="FaMagnifyingGlass" />
        </button>
      </form>
    </div>
  );
};

export default ProductSearch;
