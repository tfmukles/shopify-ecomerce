import { getCollections } from "@/lib/shopify";
import CollectionItem from "./Collection-Item";

const Sidebar = async () => {
  const collections = await getCollections();

  return (
    <>
      <div className="position-relative mb-5">
        <form action="#">
          <input
            type="search"
            className="form-control rounded-0"
            id="search-product"
            placeholder="Search..."
          />
          <button type="submit" className="search-icon pr-3 r-0">
            <i className="ti-search text-color"></i>
          </button>
        </form>
      </div>
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
      {/* <!-- price range --> */}
      <div className="mb-30">
        <h4 className="mb-4">Shop by Price</h4>
        <input
          className="range-track"
          type="text"
          data-slider-min="0"
          data-slider-max="1000"
          data-slider-step="5"
          data-slider-value="[0,300]"
        />
        <div className="d-flex justify-content-between">
          <button className="btn btn-sm btn-primary">Filter</button>
          <span className="value">$0 - $300</span>
        </div>
      </div>
      {/* <!-- size checkbox --> */}
      <div className="mb-30">
        <h4 className="mb-3">Shop by Size</h4>
        <form action="#">
          <div className="d-flex justify-content-between custom-checkbox">
            <label className="label">
              L Large
              <input type="checkbox" />
              <span className="box"></span>
            </label>
            <span className="mt-2">9</span>
          </div>
          <div className="d-flex justify-content-between custom-checkbox">
            <label className="label">
              XL Extra Large
              <input type="checkbox" />
              <span className="box"></span>
            </label>
            <span className="mt-2">5</span>
          </div>
          <div className="d-flex justify-content-between custom-checkbox">
            <label className="label">
              M Medium
              <input type="checkbox" />
              <span className="box"></span>
            </label>
            <span className="mt-2">8</span>
          </div>
          <div className="d-flex justify-content-between custom-checkbox">
            <label className="label">
              S Small
              <input type="checkbox" />
              <span className="box"></span>
            </label>
            <span className="mt-2">5</span>
          </div>
          <div className="d-flex justify-content-between custom-checkbox">
            <label className="label">
              XS Extra Small
              <input type="checkbox" />
              <span className="box"></span>
            </label>
            <span className="mt-2">3</span>
          </div>
        </form>
      </div>
      {/* <!-- color selector --> */}
      <div className="color">
        <h4 className="mb-3">Shop by Color</h4>
        <ul className="list-inline">
          <li className="list-inline-item mr-4">
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="radio-box bg-magenta"></span>
            </label>
          </li>
          <li className="list-inline-item mr-4">
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="radio-box bg-dark-green"></span>
            </label>
          </li>
          <li className="list-inline-item mr-4">
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="radio-box bg-sky-blue"></span>
            </label>
          </li>
          <li className="list-inline-item mr-4">
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="radio-box bg-red"></span>
            </label>
          </li>
          <li className="list-inline-item mr-4">
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="radio-box bg-dark"></span>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
