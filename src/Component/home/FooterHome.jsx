import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const FooterHome = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
          {/* Popular Categories */}
          <div>
            <h4 className="font-semibold mb-3">Popular Categories</h4>
            <ul className="space-y-2">
              <li>Moodboards</li>
              <li>2D CAD Details</li>
              <li>3D Models</li>
              <li>Residential Interiors</li>
              <li>Commercial Facades</li>
            </ul>
          </div>

          {/* For Architects */}
          <div>
            <h4 className="font-semibold mb-3">For Architects</h4>
            <ul className="space-y-2">
              <li>Explore Inspiration</li>
              <li>Create Moodboard</li>
              <li>Upload Project</li>
              <li>My Portfolio</li>
              <li>Design Upload</li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="font-semibold mb-3">For Vendors</h4>
            <ul className="space-y-2">
              <li>Join as Vendor</li>
              <li>Vendor Dashboard</li>
              <li>Showcase Product</li>
              <li>Analytics & Insights</li>
              <li>Product Guidelines</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>How to Upload</li>
              <li>Community Forum</li>
              <li>Submit a Ticket</li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h4 className="font-semibold mb-3">Legal & Policy</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cookie Policy</li>
              <li>Copyright Info</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About DezignBank</h4>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>How to Upload</li>
              <li>Help Center</li>
              <li>Copyright Info</li>
              <li>Press</li>
            </ul>
          </div>
        </div>

         {/* Logo */}
        <div className="mt-6 text-center mb-8">
          <h2 className="text-8xl font-bold text-gray-900">Dezignbank</h2>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t pt-6 border-gray-200">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © 2025 <span className="font-semibold text-gray-800">Dezignbank</span>. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-600 text-lg">
            <FaFacebookF className="hover:text-black transition" />
            <FaInstagram className="hover:text-black transition" />
            <FaXTwitter className="hover:text-black transition" />
            <FaLinkedinIn className="hover:text-black transition" />
            <FaYoutube className="hover:text-black transition" />
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default FooterHome;
