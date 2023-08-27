"use client";

import { useGetOrderListsQuery } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Order = () => {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.account);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  const { isLoading, isSuccess, data } = useGetOrderListsQuery(
    token as string,
    {
      skip: !token,
    },
  );

  return (
    <div className="container">
      <ul>
        {data?.map((order, i) => {
          const { lineItems } = order;
          return (
            <li className="d-flex w-full" key={i}>
              <div>
                <p className="font-bold">
                  <b>Order Number: #{order.orderNumber}</b>
                </p>
                <p>
                  <b>${order.currentTotalPrice.amount}</b>
                </p>
                <p>
                  <b>Payment Status: ${order.financialStatus}</b>
                </p>
                <p>
                  <b>fulfillmentStatus: ${order.fulfillmentStatus}</b>
                </p>
              </div>
              <ul className="flex-grow-1">
                {lineItems.map((item, i) => {
                  const { altText, width, height, url } = item.variant.image;

                  return (
                    <li
                      key={i}
                      className="d-flex align-items-center mb-4 w-50 mx-auto"
                    >
                      <Image
                        src={url}
                        width={110}
                        height={100}
                        alt={altText || "product-img"}
                      />
                      <div className="ms-4">
                        <h5 className="font-bold">
                          <Link className="text-black" href={""}>
                            {item.title}
                          </Link>
                        </h5>
                        <h5>
                          Price: <b>${item.originalTotalPrice.amount}</b>
                        </h5>
                        <h5>
                          Quantity: <b>{item.quantity}</b>
                        </h5>
                        <Link
                          className="text-black inline-block"
                          href={"/cart"}
                        >
                          More Details
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Order;
