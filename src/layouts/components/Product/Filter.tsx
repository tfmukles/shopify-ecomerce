"use client";
import { FilterItem } from "@/lib/constants";
import { createUrl } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterItem = ({ item }: { item: FilterItem }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sort") === item.slug;

  return (
    <option value={item.slug || ""} data-slug={item.slug}>
      {item.title}
    </option>
  );
};

const FilterItems = ({ name, list }: { name: string; list: FilterItem[] }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChangeHanlder = (
    e: React.ChangeEvent<HTMLSelectElement>,
    item?: FilterItem,
  ) => {
    e.preventDefault();
    const { name, value: slug } = e.target;
    const q = searchParams.get("q");
    const sort = searchParams.get("sort");

    const href = createUrl(
      pathname,
      new URLSearchParams({
        ...(q && { q }),
        ...(slug && slug.length && { [name.toLowerCase()]: slug }),
        ...(sort && { sort }),
      }),
    );
    router.push(href);
  };

  return (
    <select
      onChange={onChangeHanlder}
      className="select"
      name={name}
      id="short"
    >
      <option value={name}>{name}</option>
      {list.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </select>
  );
};

export default FilterItems;
