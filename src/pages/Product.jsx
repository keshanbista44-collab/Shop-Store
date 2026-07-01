const Product = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
          alt="Product"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h1 className="text-4xl font-bold">
            Nike Air Max
          </h1>

          <p className="text-blue-600 text-3xl font-bold mt-5">
            $120
          </p>

          <p className="mt-6 text-gray-600">
            Premium quality shoes with excellent comfort
            and modern design.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default Product;