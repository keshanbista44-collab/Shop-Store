import { motion } from "framer-motion";

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="font-bold text-lg">{product.title}</h2>

        <p className="text-gray-500 mt-2">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;