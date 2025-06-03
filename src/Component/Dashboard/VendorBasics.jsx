import React, { useState } from "react";
import { FileText, HelpCircle } from "lucide-react";

const VendorBasics = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [completedStep, setCompletedStep] = useState(2.5);

  const stepsData = [
    "Title & Description",
    "Upload Files",
    "Media upload *",
    "Category *",
    "Set Price",
    "License *",
  ];

  return (
    <>
      {/* Upload Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Upload Your Designs File
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 mb-4 sm:mb-6">
              Submit your architectural designs to reach global buyers and monetize your work.
            </p>
          </div>
          <button className="inline-flex items-center bg-gray-900 text-white text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full h-8 sm:h-10">
            <span className="mr-2">Help Support</span>
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Stepper */}
        <div className="relative mt-6 overflow-x-auto">
          <div className="w-full min-w-[600px]">
            <div className="relative flex justify-between items-start sm:items-center">
              <div
                className="absolute top-4 left-4 h-0.5 bg-orange-600 z-10 transition-all duration-300"
                style={{ width: `${((completedStep - 1) / (stepsData.length - 1)) * 100}%` }}
              />
              {stepsData.map((label, index) => {
                const step = index + 1;
                const isCompleted = step < completedStep;
                const isCurrent = step === completedStep;

                return (
                  <div
                    key={step}
                    className="relative z-20 flex flex-col items-center w-1/6 text-center"
                  >
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full text-white text-xs sm:text-sm font-semibold flex items-center justify-center mb-1 sm:mb-2 ${
                        isCompleted || isCurrent
                          ? "bg-orange-600"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step}
                    </div>
                    <div
                      className={`text-xs font-medium ${
                        isCompleted || isCurrent
                          ? "text-gray-800"
                          : "text-gray-400"
                      }`}
                    >
                      {label}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-gray-400 mt-1 hidden sm:block">
                      Explain your step here.
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Project Basics Form */}
      <div className="bg-[#F9FBFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-16 min-h-[700px]">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Project Basics</h2>

            {/* Title */}
            <div className="mb-10">
              <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
              <p className="text-sm text-gray-500 mb-3">
                Enter a short, clear title for your design
              </p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FileText size={20} />
                </span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Contemporary Residential Villa – 2D CAD"
                  className="pl-12 pr-6 py-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
                  maxLength={75}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">{title.length} / 75 Character Limit</p>
            </div>

            {/* Summary */}
            <div className="mb-12">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Summary About Design
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Enter your main text here..."
                className="w-full h-48 border border-gray-300 rounded-xl px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
                maxLength={900}
              />
              <div className="text-sm text-gray-400 mt-2">{summary.length} / 900</div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-5">
              <button className="bg-orange-100 text-orange-600 text-base px-6 py-3 rounded-md hover:bg-orange-200">
                Save
              </button>
              <button className="bg-orange-500 text-white text-base px-6 py-3 rounded-md hover:bg-orange-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorBasics;
