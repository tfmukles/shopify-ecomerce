import { getProduct } from "@/lib/shopify";
import Image from "next/image";
import { notFound } from "next/navigation";

const Product = async ({ params }: { params: { single: string } }) => {
  const product = await getProduct(params.single);
  if (!product) notFound();
  const {
    title,
    description,
    availableForSale,
    priceRange,
    featuredImage,
    images,
  } = product;

  console.log(product.options);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            {/* <!-- product image slider --> */}
            <div className="product-slider">
              <div>
                <Image
                  width={featuredImage.width}
                  height={featuredImage.height}
                  className="img-fluid w-100 image-zoom"
                  src={featuredImage.url}
                  alt="product-img"
                />
              </div>
              <div className="row gx-3">
                {images.map((image, i) => {
                  const { width, height, altText, url } = image;
                  return (
                    <div className="col-lg-4" key={i}>
                      <div className="border">
                        <Image
                          width={width}
                          height={height}
                          className="img-fluid w-100 image-zoom"
                          src={url}
                          alt={altText || "product-img"}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* <div data-image="images/product-single/product-sm-3.jpg">
                <img
                  className="img-fluid w-100 image-zoom"
                  src="images/product-single/product-sm-3.jpg"
                  alt="product-img"
                  data-zoom="images/product-single/product-sm-3.jpg"
                />
              </div> */}
            </div>
          </div>
          {/* <!-- produt details --> */}
          <div className="col-lg-6 mb-100">
            <h2>{title}</h2>
            <i className="ti-check-box text-success"></i>
            {availableForSale ? (
              <span className="text-success">Instock</span>
            ) : (
              <span className="text-danger">Out of Stock</span>
            )}
            <ul className="list-inline mb-4">
              <li className="list-inline-item mx-0">
                <a href="#" className="rated">
                  <i className="ti-star"></i>
                </a>
              </li>
              <li className="list-inline-item mx-0">
                <a href="#" className="rated">
                  <i className="ti-star"></i>
                </a>
              </li>
              <li className="list-inline-item mx-0">
                <a href="#" className="rated">
                  <i className="ti-star"></i>
                </a>
              </li>
              <li className="list-inline-item mx-0">
                <a href="#" className="rated">
                  <i className="ti-star"></i>
                </a>
              </li>
              <li className="list-inline-item mx-0">
                <a href="#" className="rated">
                  <i className="ti-star"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-gray ml-3">
                  ( 3 Reviews )
                </a>
              </li>
            </ul>
            <h4 className="text-primary h3">
              ${priceRange.minVariantPrice.amount}
            </h4>
            <h6 className="mb-3">{description}</h6>
            <div className="d-flex flex-column flex-sm-row justify-content-between mb-4">
              <input
                id="quantity"
                className="quantity mr-sm-2 mb-3 mb-sm-0"
                type="text"
                value=""
                name="quantity"
              />
              <select
                className="form-control mx-sm-2 mb-3 mb-sm-0"
                name="color"
              >
                <option value="brown">Brown Color</option>
                <option value="gray">Gray Color</option>
                <option value="black">Black Color</option>
              </select>
              <select className="form-control ml-sm-2 mb-3 mb-sm-0" name="size">
                <option className="form-control" value="small">
                  Small Size
                </option>
                <option value="medium">Medium Size</option>
                <option value="large">Large Size</option>
              </select>
              h
            </div>
            <a href="#" className="btn btn-primary mb-4">
              add to cart
            </a>
            <h4 className="mb-3">
              <span className="text-primary">Harry up!</span> Sale ends in
            </h4>
            {/* <!-- syo-timer --> */}
            <div className="syotimer dark">
              <div
                id="sale-timer"
                data-year="2019"
                data-month="5"
                data-day="1"
                data-hour="1"
              ></div>
            </div>
            <hr />
            {/* <div className="payment-option border border-primary mt-5 mb-4">
              <h5 className="bg-white">Guaranted Safe Checkout</h5>
              <img
                className="img-fluid w-100 p-3"
                src="images/payment-card/all-card.png"
                alt="payment-card"
              />
            </div> */}

            <h5 className="mb-3">4 Great Reason to Buy From Us</h5>
            <div className="row">
              {/* <!-- service item --> */}
              <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                <div className="d-flex">
                  <i className="ti-truck icon-md mr-3"></i>
                  <div className="align-items-center">
                    <h6>Free Shipping</h6>
                  </div>
                </div>
              </div>
              {/* <!-- service item --> */}
              <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                <div className="d-flex">
                  <i className="ti-shield icon-md mr-3"></i>
                  <div className="align-items-center">
                    <h6>Secure Payment</h6>
                  </div>
                </div>
              </div>
              {/* <!-- service item --> */}
              <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                <div className="d-flex">
                  <i className="ti-money icon-md mr-3"></i>
                  <div className="align-items-center">
                    <h6>Lowest Price</h6>
                  </div>
                </div>
              </div>
              {/* <!-- service item --> */}
              <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                <div className="d-flex">
                  <i className="ti-reload icon-md mr-3"></i>
                  <div className="align-items-center">
                    <h6>30 Days Return</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <h3 className="mb-3">Product Description</h3>
            <p className="text-gray mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <h4>Product Features</h4>
            <ul className="features-list">
              <li>
                Mapped with 3M™ Thinsulate™ Insulation [40G Body / Sleeves /
                Hood]
              </li>
              <li>Embossed Taffeta Lining</li>
              <li>
                DRYRIDE Durashell™ 2-Layer Oxford Fabric [10,000MM, 5,000G]
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
