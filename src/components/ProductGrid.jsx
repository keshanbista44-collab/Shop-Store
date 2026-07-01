import Product from "./Product";
import products from "../data/products";

const ProductGrid = ({ search }) => {

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductGrid;