import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = ({ open, cart, onClose }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [payment, setPayment] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleConfirm = () => {
    if (!payment) {
      alert("Please select a payment method.");
      return;
    }

    if (
      payment === "Credit / Debit Card" &&
      (!cardNumber || !cardHolder || !expiry || !cvv)
    ) {
      alert("Please fill all card details.");
      return;
    }

    alert("Payment Successful!");
    setShowPayment(false);
    onClose();
  };

  return (
    <>
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

            {/* Cart Drawer */}

            <motion.div
              initial={{ x: 450 }}
              animate={{ x: 0 }}
              exit={{ x: 450 }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 h-screen w-96 bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}

              <div className="flex justify-between items-center p-5 border-b">

                <h2 className="text-3xl font-bold">
                  Shopping Cart
                </h2>

                <button
                  onClick={onClose}
                  className="text-3xl"
                >
                  ×
                </button>

              </div>

              {/* Cart Items */}

              <div className="flex-1 overflow-y-auto">

                {cart.length === 0 ? (
                  <p className="text-center mt-10 text-gray-500">
                    Cart is Empty
                  </p>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 border-b"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />

                      <div className="flex-1">

                        <h3 className="font-bold text-lg">
                          {item.title}
                        </h3>

                        <p className="text-blue-600 font-bold text-xl">
                          ${item.price}
                        </p>

                      </div>

                    </div>
                  ))
                )}

              </div>

              {/* Footer */}

              <div className="border-t p-5">

                <div className="flex justify-between text-2xl font-bold mb-5">

                  <span>Total</span>

                  <span>${total}</span>

                </div>

                <button
                  onClick={() => setShowPayment(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg"
                >
                  Checkout
                </button>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
            {/* Payment Modal */}

      <AnimatePresence>
        {showPayment && (
          <>
            {/* Overlay */}

            <motion.div
              className="fixed inset-0 bg-black/60 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPayment(false)}
            />

            {/* Modal */}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[600px] rounded-2xl shadow-2xl p-8 z-[70]"
            >
              <h2 className="text-3xl font-bold mb-6">
                Select Payment Method
              </h2>

              <div className="space-y-4">

                {/* Card */}

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    name="payment"
                    value="Credit / Debit Card"
                    checked={payment === "Credit / Debit Card"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  💳 Credit / Debit Card
                </label>

                {/* Card Form */}

                {payment === "Credit / Debit Card" && (
                  <div className="border rounded-xl p-5 bg-gray-50 mt-3">

                    <div className="mb-4">
                      <label className="block font-medium mb-2">
                        Card Number
                      </label>

                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(e.target.value)
                        }
                        placeholder="1234 5678 9012 3456"
                        className="w-full border rounded-lg px-4 py-3"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-medium mb-2">
                        Card Holder Name
                      </label>

                      <input
                        type="text"
                        value={cardHolder}
                        onChange={(e) =>
                          setCardHolder(e.target.value)
                        }
                        placeholder="John Smith"
                        className="w-full border rounded-lg px-4 py-3"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                      <div>
                        <label className="block font-medium mb-2">
                          Expiry
                        </label>

                        <input
                          type="text"
                          value={expiry}
                          onChange={(e) =>
                            setExpiry(e.target.value)
                          }
                          placeholder="MM/YY"
                          className="w-full border rounded-lg px-4 py-3"
                        />
                      </div>

                      <div>
                        <label className="block font-medium mb-2">
                          CVV
                        </label>

                        <input
                          type="password"
                          value={cvv}
                          onChange={(e) =>
                            setCvv(e.target.value)
                          }
                          placeholder="123"
                          className="w-full border rounded-lg px-4 py-3"
                        />
                      </div>

                    </div>

                  </div>
                )}

                {/* eSewa */}

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:bg-green-50">
                  <input
                    type="radio"
                    name="payment"
                    value="eSewa"
                    checked={payment === "eSewa"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  💚 eSewa
                </label>

                {/* Khalti */}

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:bg-purple-50">
                  <input
                    type="radio"
                    name="payment"
                    value="Khalti"
                    checked={payment === "Khalti"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  💜 Khalti
                </label>

                {/* Cash */}

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={payment === "Cash on Delivery"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  💵 Cash on Delivery
                </label>

              </div>
                            {/* eSewa Info */}
              {payment === "eSewa" && (
                <div className="mt-4 border rounded-xl p-5 bg-green-50">
                  <h3 className="text-xl font-semibold mb-2">
                    eSewa Payment
                  </h3>

                  <p className="text-gray-600">
                    Scan the QR code or login to your eSewa account to complete payment.
                  </p>

                  <div className="flex justify-center my-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png"
                      alt="eSewa QR"
                      className="w-40 h-40"
                    />
                  </div>
                </div>
              )}

              {/* Khalti Info */}
              {payment === "Khalti" && (
                <div className="mt-4 border rounded-xl p-5 bg-purple-50">
                  <h3 className="text-xl font-semibold mb-2">
                    Khalti Payment
                  </h3>

                  <p className="text-gray-600">
                    Open Khalti and scan the QR code to pay.
                  </p>

                  <div className="flex justify-center my-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png"
                      alt="Khalti QR"
                      className="w-40 h-40"
                    />
                  </div>
                </div>
              )}

              {/* Cash on Delivery */}
              {payment === "Cash on Delivery" && (
                <div className="mt-4 border rounded-xl p-5 bg-yellow-50">
                  <h3 className="text-xl font-semibold">
                    Cash on Delivery
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Pay with cash when your order is delivered.
                  </p>
                </div>
              )}

              {/* Buttons */}

              <div className="flex justify-end gap-4 mt-8">

                <button
                  onClick={() => setShowPayment(false)}
                  className="px-6 py-3 rounded-xl border hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  onClick={handleConfirm}
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                >
                  Confirm Payment
                </button>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default CartDrawer;