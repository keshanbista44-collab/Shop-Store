import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Profile
        </h1>

        <div className="bg-white rounded-xl shadow p-8 max-w-xl">

          <h2 className="text-xl font-bold">
            Name
          </h2>

          <p>{user?.name}</p>

          <h2 className="text-xl font-bold mt-6">
            Email
          </h2>

          <p>{user?.email}</p>

        </div>

      </main>

    </div>
  );
};

export default Profile;