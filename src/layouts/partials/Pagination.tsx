"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { pageInfo } from "@/lib/shopify/types";
import Link from "next/link";
import { useDispatch } from "react-redux";

const Pagination = ({
  endCursor,
  hasNextPage,
  hasPreviousPage,
  currentPage,
}: Partial<pageInfo> & { currentPage: number }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-12 mt-5">
      <nav>
        <ul className="pagination justify-content-center">
          {hasPreviousPage && (
            <li className="page-item">
              <a className="page-link" href="#">
                <DynamicIcon icon="FaAnglesLeft" />
              </a>
            </li>
          )}

          {[...Array(3).keys()].map((item) => (
            <li
              className={`page-item ${
                item + 1 === currentPage ? "active" : ""
              }`}
              key={item + 1}
            >
              <Link className="page-link" href={`/products/page/${item + 1}`}>
                {item + 1}
              </Link>
            </li>
          ))}
          {hasNextPage && (
            <li className="page-item">
              <a className="page-link" href="#">
                <DynamicIcon icon="FaAnglesRight" />
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
