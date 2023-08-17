import Product from "@/components/Product";
import Sidebar from "@/components/Sidebar";
import { defaultSort } from "@/lib/constants";
import { getProducts } from "@/lib/shopify";

const Products = async () => {
  const { sortKey, reverse } = defaultSort;
  const products = await getProducts({ sortKey, reverse });

  console.log({ products });

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {/* <!-- top bar --> */}
          <div className="col-lg-12 mb-50">
            <div className="d-flex border">
              <div className="flex-basis-15 p-2 p-sm-4 border-right text-center">
                <a className="text-color d-inline-block px-1" href="shop.html">
                  <i className="ti-layout-grid3-alt"></i>
                </a>
                <a
                  className="text-gray d-inline-block px-1"
                  href="shop-list.html"
                >
                  <i className="ti-view-list-alt"></i>
                </a>
              </div>
              <div className="flex-basis-55 p-2 p-sm-4 align-self-sm-center">
                <p className="text-gray mb-0">
                  Showing <span className="text-color">1-9 of 20</span> Results
                </p>
              </div>
              <div className="flex-basis-15 p-2 p-sm-4 border-right border-left text-center">
                <select className="select" name="filter" id="filter">
                  <option value="1">Filter</option>
                  <option value="2">Popular</option>
                  <option value="3">Top Products</option>
                </select>
              </div>
              <div className="flex-basis-15 p-2 p-sm-4 text-center">
                <select className="select" name="short" id="short">
                  <option value="1">Short</option>
                  <option value="2">A-Z</option>
                  <option value="3">Z-A</option>
                </select>
              </div>
            </div>
          </div>
          {/* <!-- sidebar --> */}
          <Sidebar />
          {/* <!-- product-list --> */}
          <div className="col-lg-9">
            <div className="row">
              {products.map((product, index) => {
                return (
                  <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                    <Product product={product} />
                  </div>
                );
              })}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
