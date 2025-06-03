import React from "react";
import { Download } from "lucide-react";

const SetPriceLicense = () => {
  return (
    <div className="bg-[#F9FBFC] py-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Set Price Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Set Price</h2>

          {/* Price Input */}
          <label className="block text-gray-700 font-medium mb-1">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="₹"
            className="w-1/3 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
          />

          {/* Tooltip Guidance */}
          <div className="mb-4">
            <p className="font-semibold text-gray-800 mb-1">Tooltip guidance</p>
            <p className="text-gray-600 text-sm">
              Designs with full working files and visuals often sell for ₹2,000–₹8,000
            </p>
          </div>

          {/* Download Button */}
          <button className="mt-2 flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 font-medium transition text-sm">
            <Download className="w-4 h-4" />
            Download Sample Pricing File
          </button>
        </div>

        {/* License Agreement Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            License Agreement <span className="text-red-500">*</span>
          </h2>

          <p className="text-sm text-blue-600 font-medium underline cursor-pointer mb-2">
            License Terms
          </p>

          <p className="text-gray-700 text-sm mb-2">
            This design will be sold under the DesignBank Standard License. Please review the usage rights.
          </p>

          <div className="flex items-start gap-2 mt-3">
            <input type="checkbox" className="mt-1" />
            <label className="text-gray-700 text-sm">
              I understand and agree that this design will be sold under the DesignBank Standard License.
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="px-5 py-2 border border-orange-200 text-orange-600 bg-orange-50 rounded-md hover:bg-orange-100 transition text-sm font-medium">
            Save To Draft
          </button>
          <button className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition text-sm font-medium">
            Submit Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPriceLicense;
