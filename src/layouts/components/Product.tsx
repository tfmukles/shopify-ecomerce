import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }: { product: Product }) => {
  const { title, featuredImage, handle, priceRange } = product;

  return (
    <div className="product text-center">
      <div className="product-thumb">
        <div className="overflow-hidden position-relative">
          <Link href={`products/${handle}`}>
            <Image
              className="img-fluid w-100 mb-3 img-first"
              width={featuredImage.width}
              height={featuredImage.height}
              src={featuredImage.url}
              alt={featuredImage.altText || "Product Image"}
            />
            {/* <img
              className="img-fluid w-100 mb-3 img-second"
              src="images/collection/product-4.jpg"
              alt="product-img"
            /> */}
          </Link>
        </div>
        <div className="product-hover-overlay">
          <ul className="list-unstyled">
            <li>
              <a
                href="#"
                className="product-icon"
                data-toggle="tooltip"
                data-placement="left"
                title="Wishlist"
              >
                <i className="ti-heart"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="product-icon"
                data-toggle="tooltip"
                data-placement="left"
                title="Compare"
              >
                <i className="ti-direction-alt"></i>
              </a>
            </li>
            <li>
              <a
                data-vbtype="inline"
                href="#quickView"
                className="product-icon venobox"
                data-toggle="tooltip"
                data-placement="left"
                title="Quick View"
              >
                <i className="ti-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-info">
        <h3 className="h5">
          <Link className="text-color" href={`products/${handle}`}>
            {title}
          </Link>
        </h3>
        <span className="h5">${priceRange.maxVariantPrice.amount}</span>
      </div>
      {/* <!-- product label badge --> */}
      <div className="product-label d-none sale">-8%</div>
    </div>
  );
};

export default Product;
