import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Moon,
  Sun,
} from "lucide-react";

import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useAuth } from "../Context/AuthContext";
import { useTheme } from "../Context/ThemeContext";

const Navbar = ({ onCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          ShopStore
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/checkout">Checkout</Link>

          {user && (
            <Link to="/dashboard">Dashboard</Link>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">

          <button onClick={toggleTheme}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/wishlist" className="relative">
            <Heart />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          <button
            onClick={onCartOpen}
            className="relative"
          >
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </button>

          {user ? (
            <>
              <span>{user.name}</span>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-blue-600 px-4 py-2 rounded-lg text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden bg-white p-6 space-y-4"
          >
            <Link to="/">Home</Link>

            <Link to="/wishlist">Wishlist</Link>

            <Link to="/checkout">Checkout</Link>

            {user ? (
              <>
                <Link to="/dashboard">Dashboard</Link>

                <button
                  onClick={logout}
                  className="bg-red-500 text-white w-full py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>

                <Link to="/register">Register</Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;