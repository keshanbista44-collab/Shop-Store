import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, totalPrice } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      {cart.length === 0 ? (
        <h2 className="text-2xl text-gray-500">
          Your cart is empty.
        </h2>
      ) : (
        <div className="grid lg:grid-cols-2 gap-10">

          <div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 border rounded-xl p-4 mb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />

                <div>

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p className="text-blue-600 font-bold">
                    ${item.price}
                  </p>

                </div>

              </div>
            ))}

          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-xl mb-6">

              <span>Total</span>

              <span className="font-bold">
                ${totalPrice}
              </span>

            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
              Place Order
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Checkout;