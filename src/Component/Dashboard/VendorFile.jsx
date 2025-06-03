import React from "react";
import {
  UploadCloud,
  CheckCircle2,
  FileText,
  Trash2,
  Check,
  Plus,
} from "lucide-react";

const FileCard = ({ name, progress }) => {
  const isCompleted = progress === 100;

  const progressBarBg = isCompleted ? "bg-green-100" : "bg-orange-100";
  const progressBarFill = isCompleted ? "bg-green-500" : "bg-orange-500";
  const textColor = isCompleted ? "text-green-600" : "text-orange-500";
  const circleBorder = isCompleted
    ? "border-green-500 bg-green-100"
    : "border-orange-400 bg-orange-50";

  return (
    <div className="relative p-4 sm:p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm w-full">
      <div className="flex items-start gap-3 sm:gap-4 relative">
        {/* Left icon */}
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full border-2 ${circleBorder} mt-[6px] sm:mt-[14px]`}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
          ) : (
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-800 text-sm sm:text-base truncate max-w-[120px] sm:max-w-none">
              {name}
            </span>
          </div>

          <div className="relative">
            {/* Icons ABOVE progress bar */}
            <div className="flex justify-end items-center mb-1 gap-2">
              {!isCompleted && (
                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" />
              )}
              {isCompleted && (
                <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center border border-green-500">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Progress bar */}
            <div
              className={`w-full h-1.5 sm:h-2 ${progressBarBg} rounded-full`}
            >
              <div
                className={`h-full ${progressBarFill} rounded-full`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Percentage BELOW progress bar */}
            <div className="flex justify-end mt-1">
              <span className={`text-xs font-medium ${textColor}`}>
                {progress}%
              </span>
            </div>

            {/* Status text */}
            <p className={`text-xs mt-1 ${textColor}`}>
              {isCompleted ? "Upload Successful" : "Uploading..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VendorFile = () => {
  return (
    <div className="bg-[#F9FBFC] py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 md:p-16 min-h-[500px] sm:min-h-[700px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-10">
            Upload Working Files
          </h2>

          {/* Uploaded files */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <FileCard name="Filename.dwg" progress={100} />
            <FileCard name="Filename.dwg" progress={100} />
            <FileCard name="Filename.zip" progress={52} />
          </div>

          {/* Upload box */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center text-center mb-8 sm:mb-12 w-full min-h-[180px] sm:min-h-[250px]">
            <h3 className="text-base sm:text-xl font-semibold text-orange-600 mb-1 sm:mb-2">
              Add Working Files to upload!
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
              Supported Format .dwg, .skp, .rvt, .obj, .pdf, .zip
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold flex items-center gap-2 text-sm sm:text-base">
              <UploadCloud className="w-4 h-4 sm:w-5 sm:h-5" />
              Add File
            </button>
          </div>

          {/* File type tags */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              File Type <span className="text-red-500">*</span>
            </label>

            <div className="flex flex-wrap gap-2 mb-3">
              {[
                "2D CAD",
                "3D CAD",
                "Sketchup",
                "Revit",
                "OBJ",
                "PDF",
                "ZIP",
              ].map((fileType) => (
                <div
                  key={fileType}
                  className="bg-[#0B1C39] text-white px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 cursor-pointer hover:bg-[#0B1C39]/90 transition-colors"
                >
                  {fileType}
                  <Plus className="w-3 h-3 ml-1 hover:text-gray-300" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 transition-colors">
                Other <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
            <button className="px-4 py-2 sm:px-6 sm:py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition text-sm sm:text-base">
              Save
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition text-sm sm:text-base">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorFile;
