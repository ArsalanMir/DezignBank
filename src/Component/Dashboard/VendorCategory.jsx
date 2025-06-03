import React from "react";
import { Plus, ChevronDown } from "lucide-react";

const VendorCategory = () => {
  return (
    <div className="bg-[#F9FBFC] py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Category & Tags <span className="text-red-500">*</span>
          </h2>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="Kitchen Design Ideas"
              >
                <option>Kitchen Design Ideas</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <button className="mt-3 flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 font-medium transition text-sm">
              <Plus className="w-4 h-4" />
              Add Category
            </button>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Add Tags <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#0B1C39] text-white px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1"
                >
                  Label <Plus className="w-3 h-3" />
                </div>
              ))}
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1">
              Add New Tag <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-10">
            <button className="px-5 py-2 border border-orange-200 text-orange-600 bg-orange-50 rounded-md hover:bg-orange-100 transition text-sm font-medium">
              Save
            </button>
            <button className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition text-sm font-medium">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCategory;
