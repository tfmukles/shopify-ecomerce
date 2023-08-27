"use client";
import { useGetCollectionsQuery } from "@/redux/features/collection/collectionApi";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HeroSlider = () => {
  const { isLoading, isSuccess, data } = useGetCollectionsQuery();
  console.log({ data });

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
          <Slider {...settings} className="hero-slider">
            {/* <!-- Start first slide  --> */}
            <div className="slider-item">
              <div className="row">
                <div className="col-lg-6 align-self-center text-center text-md-left mb-4 mb-lg-0">
                  <h3
                    data-duration-in=".5"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0"
                    data-animation-out="fadeOutLeft"
                    data-delay-out="5"
                    data-duration-out=".3"
                  >
                    For Men’s
                  </h3>
                  {/* <!-- Start Title --> */}
                  <h1
                    data-duration-in=".5"
                    data-animation-in="fadeInLeft"
                    data-delay-in=".2"
                    data-animation-out="fadeOutLeft"
                    data-delay-out="5"
                    data-duration-out=".3"
                  >
                    High Quality Converse
                  </h1>
                  {/* <!-- end title --> */}
                  {/* <!-- Start Subtitle --> */}
                  <h3
                    className="mb-4"
                    data-duration-in=".5"
                    data-animation-in="fadeInLeft"
                    data-delay-in=".4"
                    data-animation-out="fadeOutLeft"
                    data-delay-out="5"
                    data-duration-out=".3"
                  >
                    for only $59.00
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  {/* <!-- end description --> */}
                  {/* <!-- Start button --> */}
                  <Link
                    href="/products"
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
                    <img
                      className="img-fluid d-unset"
                      src="images/hero-area/converse.png"
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
            {/* <!-- end slider item --> */}

            {/* <!-- Start slide  --> */}
            <div className="slider-item">
              <div className="row">
                <div className="col-lg-6 align-self-center text-center text-md-left mb-4 mb-lg-0">
                  <h3
                    data-duration-in=".5"
                    data-animation-in="fadeInDown"
                    data-delay-in="0"
                    data-animation-out="fadeOutDown"
                    data-delay-out="5.8"
                    data-duration-out=".3"
                  >
                    For Women’s
                  </h3>
                  <h1
                    data-duration-in=".5"
                    data-animation-in="fadeInDown"
                    data-delay-in=".2"
                    data-animation-out="fadeOutDown"
                    data-delay-out="5.4"
                    data-duration-out=".3"
                  >
                    High Quality Bag
                  </h1>
                  <h3
                    className="mb-4"
                    data-duration-in=".5"
                    data-animation-in="fadeInDown"
                    data-delay-in=".4"
                    data-animation-out="fadeOutDown"
                    data-delay-out="5"
                    data-duration-out=".3"
                  >
                    for only $37.00
                  </h3>
                  <p
                    className="mb-4"
                    data-duration-in=".5"
                    data-animation-in="fadeInDown"
                    data-delay-in=".6"
                    data-animation-out="fadeOutDown"
                    data-delay-out="4.6"
                    data-duration-out=".3"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="shop.html"
                    className="btn btn-primary"
                    data-duration-in=".5"
                    data-animation-in="fadeInDown"
                    data-delay-in=".8"
                    data-animation-out="fadeOutDown"
                    data-delay-out="4.2"
                    data-duration-out=".3"
                  >
                    shop now
                  </a>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="bg-letter">
                    {/* <!-- background letter --> */}
                    <span
                      data-duration-in=".5"
                      data-animation-in="fadeInRight"
                      data-delay-in="1.2"
                      data-animation-out="fadeOutRight"
                      data-delay-out="5"
                      data-duration-out=".3"
                    >
                      B
                    </span>
                    <img
                      className="img-fluid d-unset"
                      src="images/hero-area/bag.png"
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
              </div>
            </div>
            {/* <!-- end slide  --> */}
          </Slider>
        </div>
      </section>
      {/* <!-- /hero area */}
    </>
  );
};

export default HeroSlider;
