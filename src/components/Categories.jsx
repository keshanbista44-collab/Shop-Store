import { motion } from "framer-motion";

const categories = [
  "All",
  "Shoes",
  "Electronics",
  "Watches",
  "Headphones",
  "Laptops",
  "Gaming",
  "Accessories",
  "Fashion",
];

const Categories = ({ selected, setSelected }) => {
  return (
    <section className="py-16 bg-gray-100" id="categories">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(category)}
              className={`rounded-2xl shadow-lg p-10 text-2xl font-bold transition
                ${
                  selected === category
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-50"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;