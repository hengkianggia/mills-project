import Category from "@/components/Home/Category Home/Category";
import Category2 from "@/components/Home/Category Home/Category2";
import MainHeader from "@/components/Home/Main Header/MainHeader";
import NewProductList from "@/components/Home/New Product/NewProductList.jsx";

export default function Home() {
  return (
    <>
      <MainHeader />
      <Category />
      <NewProductList title={"NEW PRODUCT"} />
      <Category2 />
      <NewProductList title={"BRANDS"} button={true} />
    </>
  );
}
