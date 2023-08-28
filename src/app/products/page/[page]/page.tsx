"use client";

import Pagination from "@/partials/Pagination";

const Page = ({ params }: { params: any }) => {
  return (
    <div className="container">
      <h1>Helllow form page</h1>
      <Pagination currentPage={+params.page} />
    </div>
  );
};

export default Page;
