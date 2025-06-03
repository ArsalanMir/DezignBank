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

export default function Otp() {
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

        {/* Centered OTp Card */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="bg-white shadow-xl rounded-xl w-full max-w-sm p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m0 0l4 4m-4-4l4-4m12 12V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-center text-2xl font-semibold mb-2">
              Check your email
            </h1>
            <p className="text-center text-gray-500 mb-6 text-sm">
              We sent a verification link to <br />
              <span className="text-gray-900 font-medium">
                olivia@untitledui.com
              </span>
            </p>

            {/* OTP Code boxes */}
            <div className="flex justify-center gap-3 mb-6">
              {["3", "0", "6", "6"].map((digit, idx) => (
                <div
                  key={idx}
                  className="w-12 h-14 border rounded-md flex items-center justify-center text-xl font-semibold text-orange-500 border-orange-200"
                >
                  {digit}
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition mb-4">
              Verify email
            </button>

            {/* Resend */}
            <div className="text-center text-sm text-gray-600">
              Didn’t receive the email?{" "}
              <a
                href="#"
                className="text-orange-500 font-medium hover:underline"
              >
                Click to resend
              </a>
            </div>

            {/* Back to login */}
            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-sm text-gray-600 hover:underline inline-flex items-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to log in
              </a>
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
