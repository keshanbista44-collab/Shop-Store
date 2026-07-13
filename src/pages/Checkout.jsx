import { useState } from "react";
import { useCart } from "../Context/CartContext";

const Checkout = () => {
  const { cart } = useCart();

  const [payment, setPayment] = useState("cod");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const shipping = cart.length > 0 ? 10 : 0;
  const tax = subtotal * 0.13;
  const total = subtotal + shipping + tax;

  const placeOrder = () => {
    switch (payment) {
      case "cod":
        alert("Order placed successfully!");
        break;

      case "esewa":
        alert("Redirecting to eSewa...");
        break;

      case "khalti":
        alert("Redirecting to Khalti...");
        break;

      case "stripe":
        alert("Redirecting to Stripe...");
        break;

      case "paypal":
        alert("Redirecting to PayPal...");
        break;

      default:
        alert("Select Payment Method");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Billing */}

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Billing Details
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Country"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows="4"
                placeholder="Street Address"
                className="w-full border rounded-lg p-3"
              />

            </div>

            <h2 className="text-2xl font-bold mt-10 mb-5">
              Payment Method
            </h2>

            <div className="space-y-3">

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={payment === "esewa"}
                  onChange={() => setPayment("esewa")}
                />
                eSewa
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={payment === "khalti"}
                  onChange={() => setPayment("khalti")}
                />
                Khalti
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={payment === "stripe"}
                  onChange={() => setPayment("stripe")}
                />
                Credit / Debit Card (Stripe)
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={payment === "paypal"}
                  onChange={() => setPayment("paypal")}
                />
                PayPal
              </label>

            </div>

          </div>

          {/* Order Summary */}

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b py-4"
                >
                  <div className="flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-gray-500">
                        ${item.price}
                      </p>

                    </div>

                  </div>

                </div>
              ))
            )}

            <div className="mt-8 space-y-3">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>VAT (13%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold">

                <span>Total</span>

                <span>${total.toFixed(2)}</span>

              </div>

            </div>

            <button
              onClick={placeOrder}
              className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition text-lg font-semibold"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;