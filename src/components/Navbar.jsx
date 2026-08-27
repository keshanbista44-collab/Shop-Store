import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Menu,
  X,
  Store,
  Search,
} from "lucide-react";

const Navbar = ({ cartCount = 0, onCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Store className="text-blue-600" size={30} />
              <h1 className="text-2xl font-bold">
                ShopStore
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ y: -3 }}
              >
                <Link
                  to={link.path}
                  className="hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100">
              <Search size={20} />
            </button>

            <button
              onClick={onCartOpen}
              className="relative p-2 rounded-full hover:bg-gray-100"
            >
              <ShoppingCart size={24} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onCartOpen?.();
                }}
                className="bg-blue-600 text-white rounded-lg py-2 mt-2"
              >
                Cart ({cartCount})
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;