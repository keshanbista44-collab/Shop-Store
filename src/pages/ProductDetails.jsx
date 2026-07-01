import { useParams } from "react-router-dom";
import { useState } from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  const {
    addToWishlist,
    isInWishlist,
  } = useWishlist();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center py-20">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-14">

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="grid lg:grid-cols-2 gap-12">

          <motion.img
            whileHover={{ scale: 1.05 }}
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full h-[500px] object-cover"
          />

          <div>

            <span className="bg-red-500 text-white px-3 py-1 rounded-full">
              20% OFF
            </span>

            <h1 className="text-5xl font-bold mt-5">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mt-5">

              <div className="flex text-yellow-500">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <span>(4.9)</span>

            </div>

            <h2 className="text-4xl text-blue-600 font-bold mt-6">
              ${product.price}
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Premium quality product with elegant design,
              fast delivery and secure payment.
            </p>

            <div className="mt-8">

              <h3 className="font-bold mb-3">
                Quantity
              </h3>

              <div className="flex gap-4">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="w-10 h-10 rounded bg-gray-200"
                >
                  -
                </button>

                <span className="text-xl">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-10 h-10 rounded bg-gray-200"
                >
                  +
                </button>

              </div>

            </div>

            <div className="flex gap-4 mt-10">

              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                  }
                }}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
              >
                <ShoppingCart />
                Add To Cart
              </button>

              <button
                onClick={() =>
                  addToWishlist(product)
                }
                className="border px-6 rounded-xl hover:bg-gray-100"
              >
                <Heart
                  fill={
                    isInWishlist(product.id)
                      ? "red"
                      : "none"
                  }
                  color="red"
                />
              </button>

            </div>

            <div className="mt-10 space-y-3">

              <p>
                <strong>Category:</strong>{" "}
                {product.category}
              </p>

              <p>
                <strong>Availability:</strong>{" "}
                <span className="text-green-600">
                  In Stock
                </span>
              </p>

              <p>
                <strong>Shipping:</strong>
                Free Shipping
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;