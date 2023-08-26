const Pagination = () => {
  return (
    <div className="col-12 mt-5">
      <nav>
        <ul className="pagination justify-content-center">
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
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="ti-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
