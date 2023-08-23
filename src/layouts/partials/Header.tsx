"use client";

import EditType from "@/components/EditQuantity";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import {
  fetchCarts,
  updateProductQuantity,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  // get current path
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  const updateItemQuantity = async ({
    variantId,
    quantity,
    lineId,
  }: {
    variantId: string;
    quantity: number;
    lineId: string;
  }) => {
    dispatch(updateProductQuantity({ variantId, quantity, lineId }));
  };

  async function removeFromCart(lineIds: string[]) {
    const response = await fetch("/api/cart/remove", {
      method: "POST",
      body: JSON.stringify({
        lineIds,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({ type: "success", payload: data });
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white w-100"
        id="navbar"
      >
        <Link className="navbar-brand order-2 order-lg-1" href="/">
          <Image
            width={169}
            height={39}
            className="img-fluid"
            src="/images/logo.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse order-1 order-lg-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                home
              </a>
            </li>
            <li className="nav-item dropdown view">
              <Link
                className="nav-link dropdown-toggle"
                href="/products"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                shop
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="/products">
                  Shop
                </Link>
                <a className="dropdown-item" href="shop-list.html">
                  Shop List
                </a>
                <a className="dropdown-item" href="product-single.html">
                  Product Single
                </a>
                <a className="dropdown-item" href="cart.html">
                  Cart
                </a>
                <a className="dropdown-item" href="shipping.html">
                  Shipping Method
                </a>
                <a className="dropdown-item" href="payment.html">
                  Payment Method
                </a>
                <a className="dropdown-item" href="review.html">
                  Review
                </a>
                <a className="dropdown-item" href="confirmation.html">
                  Confirmation
                </a>
                <a className="dropdown-item" href="track.html">
                  Track Order
                </a>
              </div>
            </li>
            <li className="nav-item dropdown view">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                pages
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="/login">
                  Login
                </Link>

                <Link className="dropdown-item" href="/register">
                  Sign up
                </Link>
                <a className="dropdown-item" href="about.html">
                  About Us
                </a>
                <a className="dropdown-item" href="contact.html">
                  Contact Us
                </a>

                <a className="dropdown-item" href="login.html">
                  Login
                </a>
                <a className="dropdown-item" href="signin.html">
                  Signup
                </a>
                <a className="dropdown-item" href="forget-password.html">
                  Forget Password
                </a>
                <a className="dropdown-item" href="dashboard.html">
                  Dashboard
                </a>
                <a className="dropdown-item" href="faq.html">
                  FAQ
                </a>
                <a className="dropdown-item" href="404.html">
                  404 Page
                </a>
                <a className="dropdown-item" href="coming-soon.html">
                  Coming Soon
                </a>
                <a className="dropdown-item" href="blog-grid.html">
                  Blog
                </a>
                <a className="dropdown-item" href="blog-single.html">
                  Blog Single
                </a>
              </div>
            </li>
            <li className="nav-item dropdown mega-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mega Menu
              </a>
              <div className="dropdown-menu mega-menu">
                <div className="mx-3 mega-menu-item">
                  <h6>Men</h6>
                  <ul className="pl-0">
                    <li>
                      <a href="shop.html">Jackets & Coats</a>
                    </li>
                    <li>
                      <a href="shop.html">Jeans</a>
                    </li>
                    <li>
                      <a href="shop.html">Top & T-Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Dresses</a>
                    </li>
                    <li>
                      <a href="shop.html">Men Shirts</a>
                    </li>
                  </ul>
                </div>
                <div className="mx-3 mega-menu-item">
                  <h6>Women</h6>
                  <ul className="pl-0">
                    <li>
                      <a href="shop.html">Blouses & Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Dresses</a>
                    </li>
                    <li>
                      <a href="shop.html">Top & T-Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Jeans & Trousers</a>
                    </li>
                    <li>
                      <a href="shop.html">Jackets & Coats</a>
                    </li>
                  </ul>
                </div>
                <div className="mx-3 mega-menu-item">
                  <h6>Shoes & Bags</h6>
                  <ul className="pl-0">
                    <li>
                      <a href="shop.html">Backpacks</a>
                    </li>
                    <li>
                      <a href="shop.html">Bum Bags</a>
                    </li>
                    <li>
                      <a href="shop.html">Accross Bags</a>
                    </li>
                    <li>
                      <a href="shop.html">Shoes</a>
                    </li>
                    <li>
                      <a href="shop.html">Heeled Shoes</a>
                    </li>
                  </ul>
                </div>
                <div className="mx-3 mega-menu-item">
                  <h6>Accessories</h6>
                  <ul className="pl-0">
                    <li>
                      <a href="shop.html">Sunglasses</a>
                    </li>
                    <li>
                      <a href="shop.html">Watches</a>
                    </li>
                    <li>
                      <a href="shop.html">Gloves</a>
                    </li>
                    <li>
                      <a href="shop.html">Capes & Hats</a>
                    </li>
                    <li>
                      <a href="shop.html">Belts</a>
                    </li>
                  </ul>
                </div>
                <div className="mx-3 mega-megu-image">
                  <Image
                    width={300}
                    height={300}
                    className="img-fluid h-100"
                    src="/images/mega-megu.jpg"
                    alt="feature-img"
                  />
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/order">
                Order
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-3 navbar-right-elements">
          <div className="search-cart">
            {/* <!-- search --> */}
            <div className="search">
              <button id="searchOpen" className="search-btn">
                <i className="ti-search"></i>
              </button>
              <div className="search-wrapper">
                <form action="#">
                  <input
                    className="search-box"
                    id="search"
                    type="search"
                    placeholder="Enter Keywords..."
                  />
                  <button className="search-icon" type="submit">
                    <i className="ti-search"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* <!-- cart --> */}
            <div className="cart">
              <button
                id="cartOpen"
                className="cart-btn"
                onClick={() => setOpen(true)}
              >
                <DynamicIcon
                  width={30}
                  height={30}
                  className="me-1"
                  icon="FaCartPlus"
                />
                <span className="d-xs-none">CART</span>{" "}
                {cart?.totalQuantity || 0}
              </button>
              <div className={`cart-wrapper ${open ? "open" : ""}`}>
                {cart?.totalQuantity || 0 > 0 ? (
                  <>
                    <button
                      onClick={() => setOpen(false)}
                      className="ms-auto d-block border-0 d-felx text-right"
                    >
                      <svg
                        className="d-inline"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                      >
                        <path
                          stroke="none"
                          d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"
                        />
                      </svg>
                    </button>
                    <h4 className="mb-4">Your Cart</h4>
                    <ul>
                      {cart?.lines?.map((line, i) => {
                        const { featuredImage, title } =
                          line.merchandise.product;
                        return (
                          <li
                            key={i}
                            className="d-flex border-bottom align-items-start"
                          >
                            <Image
                              width={63}
                              height={85}
                              src={featuredImage.url}
                              alt={title}
                            />
                            <div className="mx-3">
                              <h6>{title}</h6>
                              <span>{line.quantity}</span> X{" "}
                              <span>${line.cost.totalAmount.amount}</span>
                              <div className="d-flex mt-3">
                                <EditType
                                  lineId={line.id}
                                  quantity={line.quantity}
                                  variantId={line.merchandise.id}
                                  type="plus"
                                />

                                <p className="mx-2 mb-0">{line.quantity}</p>
                                <EditType
                                  lineId={line.id}
                                  quantity={line.quantity}
                                  variantId={line.merchandise.id}
                                  type="minus"
                                />
                              </div>
                            </div>
                            <button
                              className="border-0"
                              onClick={() => removeFromCart([line.id])}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                              >
                                <path
                                  stroke="none"
                                  d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"
                                />
                              </svg>
                            </button>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="my-3">
                      <span>Subtotal: </span>
                      <span className="float-right">
                        ${cart?.cost.subtotalAmount.amount}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span>Total Tax: </span>
                      <span className="float-right">
                        ${cart?.cost.totalTaxAmount.amount}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span>Cart Total: </span>
                      <span className="float-right">
                        ${cart?.cost.totalAmount.amount}
                      </span>
                    </div>

                    <div className="text-center">
                      <a
                        href={cart?.checkoutUrl}
                        className="btn btn-dark btn-mobile rounded-0"
                      >
                        check out
                      </a>
                    </div>
                  </>
                ) : (
                  <h4>Cart is empty</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
