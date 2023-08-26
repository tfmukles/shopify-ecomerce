import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }: { product: Product }) => {
  const { title, featuredImage, handle, priceRange } = product;
  return (
    <div className="product text-center">
      <div className="product-thumb">
        <div className="overflow-hidden position-relative">
          <Link href={`/product/${handle}`}>
            <Image
              className="img-fluid w-100 mb-3 img-first"
              width={featuredImage.width}
              height={featuredImage.height}
              src={featuredImage.url}
              alt={featuredImage.altText || "Product Image"}
            />
          </Link>
        </div>
      </div>
      <div className="product-info">
        <h3 className="h5">
          <Link className="text-color" href={`/product/${handle}`}>
            {title}
          </Link>
        </h3>
        <span className="h5">${priceRange.maxVariantPrice.amount}</span>
      </div>
      <div className="product-label d-none sale">-8%</div>
    </div>
  );
};

export default Product;
