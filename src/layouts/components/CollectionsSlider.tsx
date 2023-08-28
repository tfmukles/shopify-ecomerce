"use client";

import { useGetCollectionsQuery } from "@/redux/features/collection/collectionApi";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";

const CollectionSlider = () => {
  const { isLoading, isSuccess, data } = useGetCollectionsQuery(
    "hidden-top-collections",
  );

  const settings: Settings = {
    dots: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section">
      <div className="container">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Top Collections</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...settings} className="collection-slider">
              {data?.map((product, i) => (
                <div key={i} className="col-lg-4 col-sm-6 px-3">
                  <div className="product text-center">
                    <div className="product-thumb">
                      <div className="overflow-hidden position-relative">
                        <Link href={`/product/${product.handle}`}>
                          <Image
                            width={292}
                            height={378}
                            className="img-fluid w-100 mb-3 img-first"
                            src={product.featuredImage.url}
                            alt={product.title}
                          />
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
                        <a className="text-color" href="product-single.html">
                          Leather Backpack
                        </a>
                      </h3>
                      <span className="h5">$320.79</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSlider;
