import { useState } from "react";
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
    { name: "Home", href: "#" },
    { name: "Shop", href: "#shop" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Store className="text-blue-600" size={30} />
            <h1 className="text-2xl font-bold text-gray-800">
              ShopStore
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ y: -3 }}
              >
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition">
              <Search size={20} />
            </button>

            {/* Cart */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              onClick={onCartOpen}
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ShoppingCart size={24} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
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
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onCartOpen?.();
                }}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700 transition"
              >
                <ShoppingCart size={18} />
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