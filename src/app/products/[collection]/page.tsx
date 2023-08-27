import Product from "@/components/Product/Index";
import { defaultFiltering, filtering } from "@/lib/constants";
import { getCollectionProducts } from "@/lib/shopify";
import { Suspense } from "react";

const Collection = async ({
  params,
  searchParams,
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { filter } = searchParams as { [key: string]: string };
  const { filterKey, reverse } =
    filtering.find((item) => item.slug === filter) || defaultFiltering;

  const singleCollections = await getCollectionProducts({
    collection: params.collection,
    filterKey,
    reverse,
  });

  return (
    <div className="row">
      <Suspense fallback={<h2>Loading...</h2>}>
        {singleCollections.map((product, index) => {
          return (
            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <Product product={product} />
            </div>
          );
        })}
      </Suspense>
    </div>
  );
};

export default Collection;
