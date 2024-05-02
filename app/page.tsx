import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-4">
        <Search />
      </div>

      <div className="px-5 pt-4">
        <CategoryList />
      </div>

      <div className="px-5 pt-4">
        <Image
          src="/banner-pizza.png"
          alt="até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="pt-6">
        <ProductList />
      </div>
    </>
  );
};

export default Home;
