import ProductList from "@/components/shared/product/product-list";
import { Button } from "@/components/ui/button";
import sampleData from "@/db/sample-data";
// import Chat from "@/components/shared/chat";
// import Tasks from "@/components/shared/task";
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const HomePage = async () => {
  // await delay(2000);
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default HomePage;
