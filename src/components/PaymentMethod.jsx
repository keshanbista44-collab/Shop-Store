import { useState } from "react";

const PaymentMethod = () => {
  const [method, setMethod] = useState("cod");

  const handlePayment = () => {
    switch (method) {
      case "cod":
        alert("Order placed with Cash on Delivery");
        break;

      case "esewa":
        alert("Redirect to eSewa payment");
        break;

      case "khalti":
        alert("Redirect to Khalti payment");
        break;

      case "stripe":
        alert("Redirect to Stripe Checkout");
        break;

      default:
        alert("Select a payment method");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Payment Method</h1>

      <div className="space-y-4">

        <label className="flex items-center gap-3">
          <input
            type="radio"
            checked={method === "cod"}
            onChange={() => setMethod("cod")}
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            checked={method === "esewa"}
            onChange={() => setMethod("esewa")}
          />
          eSewa
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            checked={method === "khalti"}
            onChange={() => setMethod("khalti")}
          />
          Khalti
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            checked={method === "stripe"}
            onChange={() => setMethod("stripe")}
          />
          Credit / Debit Card (Stripe)
        </label>

      </div>

      <button
        onClick={handlePayment}
        className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentMethod;