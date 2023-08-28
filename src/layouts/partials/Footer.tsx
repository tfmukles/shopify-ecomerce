"use client";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-5 mb-md-0 text-center text-sm-left">
              <h4 className="mb-4">Contact</h4>
              <p>20464 Hirthe Curve Suite, Emardton, CT 12471-4107</p>
              <p>+5(305) 785-0437</p>
              <p>info@example.com</p>
              <ul className="list-inline social-icons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ti-twitter-alt"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ti-vimeo-alt"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ti-google"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-5 mb-md-0 text-center text-sm-left">
              <h4 className="mb-4">Category</h4>
              <ul className="pl-0 list-unstyled">
                <li className="mb-2">
                  <a className="text-color" href="shop.html">
                    Men
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="shop.html">
                    Women
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="shop.html">
                    Kids
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="shop.html">
                    Accessories
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="shop.html">
                    Shoe
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-5 mb-md-0 text-center text-sm-left">
              <h4 className="mb-4">Useful Link</h4>
              <ul className="pl-0 list-unstyled">
                <li className="mb-2">
                  <a className="text-color" href="about.html">
                    News & Tips
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="about.html">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="address.html">
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="shop.html">
                    Our Shop
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 text-center text-sm-left">
              <h4 className="mb-4">Our Policies</h4>
              <ul className="pl-0 list-unstyled">
                <li className="mb-2">
                  <a className="text-color" href="404.html">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="404.html">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="404.html">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="404.html">
                    Terms of Sale
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-color" href="dashboard.html">
                    Free Shipping & Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-center text-md-left mb-4 mb-md-0 align-self-center">
              <p className="text-white mb-0">
                Logo &copy; 2018 all right reserved
              </p>
            </div>
            <div className="col-md-2 text-center text-md-left mb-4 mb-md-0">
              <img src="images/logo-alt.png" alt="logo" />
            </div>
            <div className="col-md-5 text-center text-md-right mb-4 mb-md-0">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <img
                    className="img-fluid rounded atm-card-img"
                    src="images/payment-card/card-1.jpg"
                    alt="card"
                  />
                </li>
                <li className="list-inline-item">
                  <img
                    className="img-fluid rounded atm-card-img"
                    src="images/payment-card/card-2.jpg"
                    alt="card"
                  />
                </li>
                <li className="list-inline-item">
                  <img
                    className="img-fluid rounded atm-card-img"
                    src="images/payment-card/card-3.jpg"
                    alt="card"
                  />
                </li>
                <li className="list-inline-item">
                  <img
                    className="img-fluid rounded atm-card-img"
                    src="images/payment-card/card-4.jpg"
                    alt="card"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
