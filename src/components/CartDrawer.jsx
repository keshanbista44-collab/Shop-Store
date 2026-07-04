import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CartDrawer = ({ open, setOpen, cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-96 h-screen bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>

              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border-b py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-blue-600 font-bold mt-2">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="border-t p-5">
              <div className="flex justify-between text-xl font-bold mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
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