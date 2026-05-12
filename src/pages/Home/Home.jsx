import { useEffect, useState } from "react";
import Carousel from "../../components/layout/Carousel/Carousel";
import Hero from "../../components/layout/Hero/Hero";
import CategoryGrid from "../../components/Categories/CategoryGrid";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const json = await res.json();
    setData(json?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const featuredCategories = [
    {
      title: "Fragrances",
      slug: "fragrances",
    },

    {
      title: "Beauty",
      slug: "beauty",
    },

    {
      title: "Groceries",
      slug: "groceries",
    },

    {
      title: "Furniture",
      slug: "furniture",
    },
  ];

  return (
    <main className="bg-white mx-20">
      <Carousel />
      <CategoryGrid
        title="Shop By Category"
        subtitle="Discover collections designed for every style."
        categories={featuredCategories}
        showViewAll={true}
        bgColor="bg-[#fafafa]"
      />
      ;
      <Hero />
    </main>
  );
};

export default Home;
