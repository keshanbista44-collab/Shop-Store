import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <Navbar
        cartCount={cart.length}
        onCartOpen={() => setCartOpen(true)}
      />

      {/* Hero */}
      <Hero />

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Products */}
      <ProductGrid
        addToCart={addToCart}
        search={search}
      />

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;