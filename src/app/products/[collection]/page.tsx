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
  const { sortKey, reverse } =
    filtering.find((item) => item.slug === filter) || defaultFiltering;

  const singleCollections = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });

  console.log({ sortKey, reverse });

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
      <div className="col-12 mt-5">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="ti-arrow-right"></i>
              </a>
            </li>
          </ul>
        </nav>
        aAssS
      </div>
    </div>
  );
};

export default Collection;
