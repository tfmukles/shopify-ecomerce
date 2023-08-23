import { store } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

const Order = () => {
  const { user } = store.getState().user;
  // const orders = axios.post("/order/lists");

  return (
    <div className="container">
      <ul>
        <li className="d-flex align-items-center mb-4 w-50 mx-auto">
          <Image
            src={"/images/cart/product-1.jpg"}
            width={110}
            height={110}
            alt="Products"
          />
          <div className="ms-4">
            <h5 className="font-bold">
              <Link className="text-black" href={""}>
                Nillkin Hard Case for Realme 8 4G / Realme 8 Pro Phone Cases ,
                Super Frosted Shield PC Back Cover for Realme
              </Link>
            </h5>
            <h5>
              Price: <b>$4200</b>
            </h5>
            <h5>
              Quantity: <b>$4200</b>
            </h5>
            <small>Instock</small>
            <Link className="text-black inline-block" href={"/cart"}>
              More Details
            </Link>
          </div>
        </li>
        <li className="d-flex align-items-center mb-3 w-50 mx-auto">
          <Image
            src={"/images/cart/product-1.jpg"}
            width={110}
            height={110}
            alt="Products"
          />
          <div className="ms-4">
            <h5 className="font-bold">
              <Link className="text-black" href={""}>
                Nillkin Hard Case for Realme 8 4G / Realme 8 Pro Phone Cases ,
                Super Frosted Shield PC Back Cover for Realme
              </Link>
            </h5>
            <h5>
              Price: <b>$4200</b>
            </h5>
            <small>Instock</small>
            <Link className="text-black inline-block" href={"/cart"}>
              More Details
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Order;
