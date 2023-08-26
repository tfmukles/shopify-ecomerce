import Product from "@/components/Product/Index";
import { defaultFiltering } from "@/lib/constants";
import { getProducts } from "@/lib/shopify";

const Products = async () => {
  const { sortKey, reverse } = defaultFiltering;
  const products = await getProducts({ sortKey, reverse });

  return (
    <div className="row">
      {products.map((product, index) => {
        return (
          <div className="col-lg-4 col-sm-6 mb-4" key={index}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
