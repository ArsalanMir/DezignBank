import React from "react";
import { FcGoogle } from "react-icons/fc";

// Image imports
import colum1 from "../../assets/login/colum1.jpg";
import colum12 from "../../assets/login/colum12.jpg";
import colum13 from "../../assets/login/colum13.jpg";
import colum21 from "../../assets/login/colum21.jpg";
import colum22 from "../../assets/login/colum22.jpg";
import colum23 from "../../assets/login/colum23.jpg";
import colum31 from "../../assets/login/colum31.jpg";
import colum32 from "../../assets/login/colum32.jpg";
import colum33 from "../../assets/login/colum33.jpg";
import colum41 from "../../assets/login/colum41.jpg";
import colum42 from "../../assets/login/colum42.jpg";
import colum43 from "../../assets/login/colum43.jpg";
import colum51 from "../../assets/login/colum51.jpg";
import colum52 from "../../assets/login/colum52.jpg";
import colum53 from "../../assets/login/colum53.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const backgroundImages = [
    colum1,
    colum12,
    colum13,
    colum21,
    colum22,
    colum23,
    colum31,
    colum32,
    colum33,
    colum41,
    colum42,
    colum43,
    colum51,
    colum52,
    colum53,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Background with Login */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Masonry Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2 p-4">
            {backgroundImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`bg-${i}`}
                className="mb-2 w-full max-h-72 object-cover rounded-lg"
              />
            ))}
          </div>
          {/* Black overlay to darken background */}
          <div className="absolute inset-0 bg-[#00000080]"></div>
        </div>

        {/* Centered Login Card */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="bg-white shadow-xl rounded-xl w-full max-w-sm p-8">
            <h1 className="text-center text-2xl font-bold mb-4">
              Dezignbank
            </h1>
            <h1 className="text-center text-2xl font-bold mb-2">
              Log in to your account
            </h1>
            <h2 className="text-center text-gray-500 mb-6">
              Welcome back! Please enter your details.
            </h2>

            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-black" />
                  <span>Remember for this device</span>
                </label>
                <a href="#" className="text-orange-500 hover:underline">
                  Forgot password
                </a>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition">
                Sign in
              </button>
            </form>

            <div className="my-4 text-center text-gray-500">or</div>

            <button className="flex items-center justify-center w-full border py-2 rounded-md hover:bg-gray-100 transition">
              <FcGoogle className="text-xl mr-2" />
              Sign in with Google
            </button>

            <div className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-orange-500 font-medium hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Below Background */}
      <footer className="bg-white text-black py-10 px-6">
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-center mb-6">
          Dezignbank
        </h1>

        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
       
          <p className="text-sm">
            &copy; 2025 Dezignbank. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-800"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-800"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-800"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
        
      </footer>
    </div>
  );
}
