import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Left: Logo and nav links */}
      <div className="flex items-center space-x-10">
        <Link to="/" className="text-2xl font-bold text-black">
          Dezignbank
        </Link>
        <div className="flex space-x-8 text-base text-gray-700 font-medium">
          <Link to="/" className="hover:text-black">Design</Link>
          {/* {/* <Link to="#" className="hover:text-black">Mood Boards</Link> */}
          <Link to="/vendor" className="hover:text-black">Vendor</Link>
          <Link to="/dashboard" className="hover:text-black">Seller</Link>
        </div>
      </div>

      {/* Right: Cart icon and buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/cart">
          <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-black" />
        </Link>
        <Link
          to="/login"
          className="border border-gray-300 px-5 py-2 rounded-md text-base hover:bg-gray-100"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-black text-white px-5 py-2 rounded-md text-base hover:opacity-90"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
