import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import products from "../data/products";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-20 text-3xl">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl shadow-lg"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-3xl text-blue-600 font-bold mt-4">
            ${product.price}
          </p>

          <p className="mt-6 text-gray-600">
            Premium quality product with modern design.
            Fast shipping and secure payment.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default Product;