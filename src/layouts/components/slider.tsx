"use client";
import { useGetCollectionsQuery } from "@/redux/features/collection/collectionApi";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const runtime = "edge";

const HeroSlider = () => {
  const { isLoading, data } = useGetCollectionsQuery(
    "hidden-homepage-carousel",
  );

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 7500,
    lazyLoad: "progressive",
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: true,
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
    <>
      <section className="section bg-gray hero-area">
        <div className="container">
          {isLoading && <h1>Loading...</h1>}
          <Slider {...settings} className="hero-slider">
            {/* <!-- Start first slide  --> */}
            {data?.map((product) => (
              <div className="slider-item" key={product.id}>
                <div className="row">
                  <div className="col-lg-6 align-self-center text-center text-md-left mb-4 mb-lg-0">
                    {/* <!-- Start Title --> */}
                    <h1
                      data-duration-in=".5"
                      data-animation-in="fadeInLeft"
                      data-delay-in=".2"
                      data-animation-out="fadeOutLeft"
                      data-delay-out="5"
                      data-duration-out=".3"
                    >
                      {product.title}
                    </h1>
                    <h3
                      className="mb-4"
                      data-duration-in=".5"
                      data-animation-in="fadeInLeft"
                      data-delay-in=".4"
                      data-animation-out="fadeOutLeft"
                      data-delay-out="5"
                      data-duration-out=".3"
                    >
                      ${product.priceRange.minVariantPrice.amount}
                    </h3>
                    {/* <!-- end subtitle --> */}
                    {/* <!-- Start description --> */}
                    <p
                      className="mb-4"
                      data-duration-in=".5"
                      data-animation-in="fadeInLeft"
                      data-delay-in=".6"
                      data-animation-out="fadeOutLeft"
                      data-delay-out="5"
                      data-duration-out=".3"
                    >
                      {product.description}
                    </p>
                    {/* <!-- end description --> */}
                    {/* <!-- Start button --> */}
                    <Link
                      href={`/product/${product.handle}`}
                      className="btn btn-primary"
                      data-duration-in=".5"
                      data-animation-in="fadeInLeft"
                      data-delay-in=".8"
                      data-animation-out="fadeOutLeft"
                      data-delay-out="5"
                      data-duration-out=".3"
                    >
                      shop now
                    </Link>
                    {/* <!-- end button --> */}
                  </div>
                  {/* <!-- Start slide image --> */}
                  <div className="col-lg-6 text-center text-md-left">
                    {/* <!-- background letter --> */}
                    <div className="bg-letter">
                      <span
                        data-duration-in=".5"
                        data-animation-in="fadeInRight"
                        data-delay-in="1.2"
                        data-animation-out="fadeOutRight"
                        data-delay-out="5"
                        data-duration-out=".3"
                      >
                        C
                      </span>
                      {/* <!-- Slide image --> */}
                      <Image
                        width={636}
                        height={636}
                        className="img-fluid d-unset"
                        src={product.featuredImage.url || ""}
                        alt="converse"
                        data-duration-in=".5"
                        data-animation-in="fadeInRight"
                        data-delay-in="1"
                        data-animation-out="fadeOutRight"
                        data-delay-out="5"
                        data-duration-out=".3"
                      />
                    </div>
                  </div>
                  {/* <!-- end slide image  --> */}
                </div>
              </div>
            ))}

            {/* <!-- end slider item --> */}
          </Slider>
        </div>
      </section>
      {/* <!-- /hero area */}
    </>
  );
};

export default HeroSlider;
