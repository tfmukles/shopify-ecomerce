import { getCollections } from "@/lib/shopify";
import CollectionItem from "./Collection-Item";
import ProductSearch from "./Product-Search";

const Sidebar = async () => {
  const collections = await getCollections();

  return (
    <>
      <ProductSearch />
      {/* <!-- categories --> */}
      <div className="mb-30">
        <h4 className="mb-3">Shop by Categories</h4>
        <ul className="pl-0 shop-list list-unstyled">
          {collections.map((collection, i) => (
            <CollectionItem
              key={i}
              title={collection.title}
              path={collection.path}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
