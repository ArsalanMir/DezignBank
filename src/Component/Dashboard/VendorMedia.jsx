import React from "react";
import { UploadCloud, PlusCircle, Check } from "lucide-react";

const MediaCard = ({ isFilled }) => {
  return (
    <div className="relative w-32 h-32 border border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-white shadow-sm">
      {isFilled ? (
        <>
          <img
            src="https://via.placeholder.com/100"
            alt="supporting"
            className="w-full h-full object-cover rounded-xl"
          />
          <button className="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
            <Check className="w-4 h-4 text-red-500" />
          </button>
        </>
      ) : (
        <PlusCircle className="w-8 h-8 text-orange-500" />
      )}
    </div>
  );
};

const VendorMedia = () => {
  return (
    <div className="bg-[#F9FBFC] py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-16 min-h-[700px]">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Media and thumbnail upload <span className="text-red-500">*</span>
          </h2>

          {/* Upload Success Message */}
          <div className="space-y-6 mb-12">
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">
                  Thumbnail.jpg
                </span>
              </div>

              {/* Trash icon above progress bar */}
              <div className="flex justify-end items-center mb-1 gap-2">
                <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center border border-green-500">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-green-100 rounded-full">
                <div className="h-full bg-green-500 rounded-full w-full"></div>
              </div>

              {/* Percentage and status text */}
              <div className="mt-1 flex justify-end">
                <span className="text-xs font-medium text-green-600">
                  100%
                </span>
              </div>
              <p className="text-xs text-green-600 mt-1">Upload Successful</p>
            </div>
          </div>

          {/* Thumbnail Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center mb-12 w-full min-h-[250px]">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Add your best visuals and a clean thumbnail.
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Supported Format png and jpg.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2">
              <UploadCloud className="w-5 h-5" />
              Add File
            </button>
          </div>

          {/* Supporting Images */}
          <div>
            <h4 className="text-gray-700 mb-3 font-medium">
              Supporting Images
            </h4>
            <div className="flex gap-4 flex-wrap">
              <MediaCard isFilled={true} />
              <MediaCard isFilled={true} />
              <MediaCard isFilled={false} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-12">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
              Save
            </button>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorMedia;
