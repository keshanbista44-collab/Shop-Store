import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 p-10 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold">
          Welcome {user?.name}
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-xl font-bold">
              Orders
            </h2>

            <p className="text-4xl mt-4">
              12
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-xl font-bold">
              Wishlist
            </h2>

            <p className="text-4xl mt-4">
              8
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-xl font-bold">
              Cart
            </h2>

            <p className="text-4xl mt-4">
              4
            </p>
          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;