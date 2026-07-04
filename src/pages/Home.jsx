import { useState } from "react";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

import { useCart } from "../Context/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Hero />

      <SearchBar />

      <Categories
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />

      <ProductGrid
        addToCart={addToCart}
        category={selectedCategory}
      />

      <Footer />
    </>
  );
};

export default Home;