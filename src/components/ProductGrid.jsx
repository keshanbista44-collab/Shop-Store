import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Nike Shoes",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    title: "Headphones",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 4,
    title: "Laptop",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
];

const ProductGrid = ({ addToCart }) => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductGrid;