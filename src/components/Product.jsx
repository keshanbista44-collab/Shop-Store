import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <span className="text-sm text-blue-600 font-semibold">
          {product.category}
        </span>

        <h2 className="text-xl font-bold mt-2">
          {product.title}
        </h2>

        <p className="text-2xl font-bold text-blue-600 mt-3">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-5 w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          <ShoppingCart size={18} />
          Add To Cart
        </button>

      </div>
    </motion.div>
  );
};

export default Product;