import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

import { useCart } from "./Context/CartContext";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const { cart, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <CartDrawer
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-5xl font-bold">
                404 | Page Not Found
              </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;