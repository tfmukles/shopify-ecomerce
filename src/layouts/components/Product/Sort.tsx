"use client";
import { SortItem } from "@/lib/constants";
import { createUrl } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortFilterItem = ({ item }: { item: SortItem }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sort") === item.slug;
  return (
    <option value={item.slug || ""} data-slug={item.slug}>
      {item.title}
    </option>
  );
};

const SortItems = ({ name, list }: { name: string; list: SortItem[] }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChangeHanlder = (
    e: React.ChangeEvent<HTMLSelectElement>,
    item?: SortItem,
  ) => {
    e.preventDefault();
    const { name, value: slug } = e.target;
    const q = searchParams.get("q");
    const filter = searchParams.get("filter");

    const href = createUrl(
      pathname,
      new URLSearchParams({
        ...(q && { q }),
        ...(filter && { filter }),
        ...(slug && slug.length && { [name.toLowerCase()]: slug }),
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
        <SortFilterItem key={i} item={item} />
      ))}
    </select>
  );
};

export default SortItems;
