import { getProducts } from "@/lib/shopify";

const Page = async ({ params }: { params: { page: string } }) => {
  const { products, pageInfo } = await getProducts({
    cursor: "eyJsYXN0X2lkIjo4NTc2NzQ2NjUxOTcwLCJsYXN0X3ZhbHVlIjowLjB9",
  });

  console.log(products);
  return (
    <div className="container">
      <h1>Helllow form page</h1>
    </div>
  );
};

export default Page;
