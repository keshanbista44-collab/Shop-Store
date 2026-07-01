import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

import { useCart } from "./Context/CartContext";

function App() {
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const { cart, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<Product />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>

      <CartDrawer
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}

export default App;