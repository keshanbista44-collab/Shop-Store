import Sidebar from "../components/Sidebar";

const Orders = () => {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Orders
        </h1>

        <div className="bg-white shadow rounded-xl p-8">

          <p>No orders yet.</p>

        </div>

      </main>

    </div>
  );
};

export default Orders;