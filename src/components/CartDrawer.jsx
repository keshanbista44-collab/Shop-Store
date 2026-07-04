import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = ({ open, cart, onClose }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>

      {open && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-96 bg-white shadow-2xl z-50 flex flex-col"
          >

            <div className="flex justify-between items-center p-5 border-b">

              <h2 className="text-2xl font-bold">
                Shopping Cart
              </h2>

              <button
                onClick={onClose}
                className="text-3xl"
              >
                ×
              </button>

            </div>

            <div className="flex-1 overflow-y-auto">

              {cart.length === 0 ? (
                <p className="text-center mt-10 text-gray-500">
                  Cart is Empty
                </p>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 p-4 border-b"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded object-cover"
                    />

                    <div>
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-blue-600 font-bold">
                        ${item.price}
                      </p>
                    </div>

                  </div>
                ))
              )}

            </div>

            <div className="border-t p-5">

              <div className="flex justify-between mb-4 text-lg font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Checkout
              </button>

            </div>

          </motion.div>
        </>
      )}

    </AnimatePresence>
  );
};

export default CartDrawer;