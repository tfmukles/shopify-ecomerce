import FilterItems from "@/components/Product/Filter";
import Sidebar from "@/components/Product/Sidebar";
import { filtering } from "@/lib/constants";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            {/* <!-- top bar --> */}
            <div className="col-lg-12 mb-50">
              <div className="d-flex border">
                <div className="flex-basis-15 p-2 p-sm-4 border-right text-center">
                  <a
                    className="text-color d-inline-block px-1"
                    href="shop.html"
                  >
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
                    Showing <span className="text-color">1-9 of 20</span>{" "}
                    Results
                  </p>
                </div>
                <div className="flex-basis-15 p-2 p-sm-4 border-right border-left text-center">
                  {/* <SortItems name={"Sort"} list={sorting} /> */}
                </div>
                <div className="flex-basis-15 p-2 p-sm-4 text-center">
                  <FilterItems name={"Filter"} list={filtering} />
                </div>
              </div>
            </div>
            {/* <!-- sidebar --> */}
            <div className="col-lg-3">
              <Sidebar />
            </div>
            {/* <!-- product-list --> */}
            <div className="col-lg-9">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLayout;
