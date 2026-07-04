import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No products found 😢
        </div>
      )}

    </div>
  );
};

export default ProductGrid;