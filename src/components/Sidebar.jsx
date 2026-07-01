import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  User,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        ShopStore
      </h1>

      <nav className="space-y-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link
          to="/orders"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <ShoppingBag />
          Orders
        </Link>

        <Link
          to="/wishlist"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <Heart />
          Wishlist
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <User />
          Profile
        </Link>

        <button
          onClick={logout}
          className="flex items-center gap-3 text-red-400 mt-10"
        >
          <LogOut />
          Logout
        </button>

      </nav>

    </aside>
  );
};

export default Sidebar;