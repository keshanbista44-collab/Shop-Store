import ProductGrid from "../components/ProductGrid";
import { useCart } from "../Context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Shop
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Browse all our latest products.
        </p>

        <ProductGrid addToCart={addToCart} />

      </div>
    </div>
  );
};

export default Shop;