const CartSidebar = () => {
  return (
    <div className="cart-wrapper open">
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
        <a href="cart.html" className="btn btn-dark btn-mobile rounded-0">
          view cart
        </a>
        <a href="shipping.html" className="btn btn-dark btn-mobile rounded-0">
          check out
        </a>
      </div>
    </div>
  );
};
