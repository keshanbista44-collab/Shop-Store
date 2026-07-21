import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            Discover Amazing Products
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Shop premium quality products with the best prices,
            fast delivery and secure payment.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Shop Now
          </button>
        </motion.div>

        <motion.img
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
          alt="Hero"
          className="rounded-2xl shadow-2xl"
        />

      </div>
    </section>
  );
};

export default Hero;