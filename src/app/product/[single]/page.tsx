import VariantSelector from "@/components/VariantSelector";
import { getProduct } from "@/lib/shopify";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { single: string };
}): Promise<Metadata> => {
  const product = await getProduct(params.single);
  if (!product) return notFound();
  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
  };
};

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
    options,
    variants,
  } = product;

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
            <div className="mb-3">
              <VariantSelector variants={variants} options={options} />
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
          </div>
          <div className="col-lg-12">
            <h3 className="mb-3">Product Description</h3>
            {description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
