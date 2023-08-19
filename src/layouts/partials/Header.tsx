"use client";

import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white w-100"
        id="navbar"
      >
        <Link className="navbar-brand order-2 order-lg-1" href="/">
          <img className="img-fluid" src="images/logo.png" alt="logo" />
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
              <a
                className="nav-link dropdown-toggle"
                href="shop.html"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                shop
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="shop.html">
                  Shop
                </a>
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
                  <img
                    className="img-fluid h-100"
                    src="images/mega-megu.jpg"
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
              <button id="cartOpen" className="cart-btn">
                <i className="ti-bag"></i>
                <span className="d-xs-none">CART</span> 3
              </button>
              <div className="cart-wrapper">
                <i id="cartClose" className="ti-close cart-close"></i>
                <h4 className="mb-4">Your Cart</h4>
                <ul className="pl-0 mb-3">
                  <li className="d-flex border-bottom">
                    <img src="images/cart/product-1.jpg" alt="product-img" />
                    <div className="mx-3">
                      <h6>Eleven Paris Skinny Jeans</h6>
                      <span>1</span> X <span>$79.00</span>
                    </div>
                    <i className="ti-close"></i>
                  </li>
                  <li className="d-flex border-bottom">
                    <img src="images/cart/product-2.jpg" alt="product-img" />
                    <div className="mx-3">
                      <h6>Eleven Paris Skinny Jeans top</h6>
                      <span>1 X</span> <span>$79.00</span>
                    </div>
                    <i className="ti-close"></i>
                  </li>
                </ul>
                <div className="mb-3">
                  <span>Cart Total</span>
                  <span className="float-right">$79.00</span>
                </div>
                <div className="text-center">
                  <a
                    href="cart.html"
                    className="btn btn-dark btn-mobile rounded-0"
                  >
                    view cart
                  </a>
                  <a
                    href="shipping.html"
                    className="btn btn-dark btn-mobile rounded-0"
                  >
                    check out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
