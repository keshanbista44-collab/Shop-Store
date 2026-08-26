import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Nike Air Max",
    price: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    title: "Apple Watch",
    price: 399,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    title: "Sony Headphones",
    price: 199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 4,
    title: "MacBook Pro",
    price: 1499,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 5,
    title: "Gaming Mouse",
    price: 59,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
  },
  {
    id: 6,
    title: "Mechanical Keyboard",
    price: 129,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
  },
  {
    id: 7,
    title: "DSLR Camera",
    price: 899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    price: 89,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
  },
  {
    id: 9,
    title: "Leather Backpack",
    price: 149,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
  {
    id: 10,
    title: "Sunglasses",
    price: 79,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  },
  {
    id: 11,
    title: "Wireless Earbuds",
    price: 149,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500",
  },
  {
    id: 12,
    title: "iPhone 15",
    price: 999,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
  },
  {
    id: 13,
    title: "Gaming Chair",
    price: 299,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500",
  },
  {
    id: 14,
    title: "4K Monitor",
    price: 399,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500",
  },
  {
    id: 15,
    title: "Coffee Mug",
    price: 25,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
  },
];

const ProductGrid = ({ addToCart }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Products
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Explore our latest collection
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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