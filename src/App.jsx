import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar
        cartCount={3}
        onCartOpen={() => setCartOpen(true)}
      />

      {cartOpen && (
        <div className="fixed right-0 top-0 h-screen w-80 bg-white shadow-2xl p-5">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
        </div>
      )}
    </>
  );
}

export default App;