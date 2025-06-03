import React, { useState } from "react";
import {
  Bell,
  Settings,
  UploadCloud,
  LayoutDashboard,
  BarChart2,
  Folder,
  LucideArrowUpLeftFromCircle,
  Menu,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const VendorNav = () => {
  const location = useLocation();

  const isDashboard = location.pathname === "/vendor";

  return (
    <div className="bg-white shadow-sm relative">
      {/* Top Navigation */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/" className="text-xl font-bold text-black">
            Dezignbank
          </Link>
          <nav className="hidden md:flex space-x-4 text-sm text-gray-700 items-center">
            <Link
              to="/vendor"
              className={`flex items-center px-3 py-2 hover:text-black ${
                isDashboard ? "bg-orange-100 text-orange-600 rounded" : ""
              }`}
            >
              <LayoutDashboard size={16} className="mr-1" />
              Dashboard
            </Link>

            <Link
              to="/vendor-uploads"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
            >
              Upload Design
            </Link>
            <Link
              to="/vendor-profile"
              className="flex items-center px-3 py-2 hover:text-black"
            >
              <Folder size={16} className="mr-1" />
              Portfolio
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hidden sm:flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded space-x-2">
            <LucideArrowUpLeftFromCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Upload Center</span>
          </button>
          <button className="md:hidden p-2 text-gray-600 hover:text-black">
            <Menu className="w-5 h-5" />
          </button>
          <Settings className="hidden sm:block w-5 h-5 text-gray-600 hover:text-black" />
          <Bell className="w-5 h-5 text-gray-600 hover:text-black" />
        </div>
      </header>
    </div>
  );
};

export default VendorNav;
