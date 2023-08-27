import DynamicIcon from "@/helpers/DynamicIcon";
import { pageInfo } from "@/lib/shopify/types";

const Pagination = ({ endCursor, hasNextPage, hasPreviousPage }: pageInfo) => {
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
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
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
