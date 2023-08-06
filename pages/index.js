import Category from "@/components/Home/Category Home/Category";
import MainHeader from "@/components/Home/Main Header/MainHeader";
import NewProductList from "@/components/Home/New Product/NewProductList.jsx";

export default function Home() {
  return (
    <>
      <MainHeader />
      <Category />
      <NewProductList />
    </>
  );
}
