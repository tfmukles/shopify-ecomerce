import Product from "@/components/Product/Index";
import {
  defaultFiltering,
  defaultSort,
  filtering,
  sorting,
} from "@/lib/constants";
import { getProducts } from "@/lib/shopify";
import { sortProducts } from "@/lib/utils";
import Pagination from "@/partials/Pagination";

const Products = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { filter, sort, q } = searchParams as { [key: string]: string };
  const { filterKey, reverse } =
    filtering.find((item) => item.slug === filter) || defaultFiltering;
  const { products, pageInfo } = await getProducts({
    filterKey,
    reverse,
    query: q,
  });
  const { direction } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const filterProducts = sortProducts(products, direction);

  if (filterProducts.length <= 0) {
    return <h1 className="text-center mt-5">No products</h1>;
  }

  return (
    <>
      <div className="row">
        {filterProducts.map((product, index) => (
          <div className="col-lg-4 col-sm-6 mb-4" key={index}>
            <Product product={product} />
          </div>
        ))}
      </div>
      <Pagination {...pageInfo} currentPage={1} />
    </>
  );
};

export default Products;
