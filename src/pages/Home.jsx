import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Home = ({ search, setSearch }) => {
  return (
    <>
      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProductGrid
        search={search}
      />

      <Footer />
    </>
  );
};

export default Home;