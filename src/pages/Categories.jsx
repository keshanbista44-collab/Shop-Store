const Categories = () => {
  const categories = [
    "Shoes",
    "Electronics",
    "Watches",
    "Headphones",
    "Laptops",
    "Gaming",
    "Accessories",
    "Fashion",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          Categories
        </h1>

        <div className="grid md:grid-cols-4 gap-8">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-10 text-center hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold">
                {item}
              </h2>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Categories;