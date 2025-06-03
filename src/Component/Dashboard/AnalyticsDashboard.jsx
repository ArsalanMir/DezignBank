import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Download, Filter, Search } from "lucide-react";
import "chart.js/auto";
import { FiChevronLeft, FiChevronRight, FiMoreVertical } from "react-icons/fi";

const AnalyticsDashboard = () => {
  const salesData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          4000, 4200, 4600, 5400, 6800, 9480, 8800, 8600, 8700, 9100, 9200,
          9600,
        ],
        fill: true,
        backgroundColor: "#FDEAD7",
        borderColor: "#EE7035",
        tension: 0.4,
      },
    ],
  };

  const trafficData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Traffic",
        data: [600, 750, 500, 700, 550, 900, 650, 680, 700, 720, 750, 780],
        backgroundColor: "#FDEAD7",
      },
    ],
  };

  const activity = [
    { name: "Aliah Lane", action: "Purchased Modern Loft Plan" },
    { name: "Lana Steiner", action: "Purchased Modern Loft Plan" },
    { name: "Candice Wu", action: "Purchased Modern Loft Plan" },
    { name: "Ava Wright", action: "Purchased Modern Loft Plan" },
    { name: "Koray Okumus", action: "Purchased Modern Loft Plan" },
    ...Array(8).fill({
      name: "Andi Lane",
      action: "Purchased Cozy Mood Board",
    }),
  ];
  const designs = [
    {
      id: 1,
      title: "Content curating app",
      description: "Brings all your news into one place",
      views: "12.4k",
      saves: "1.2k",
      earnings: "₹1,28,000",
      rank: 1,
    },
    {
      id: 2,
      title: "Design software",
      description: "Super lightweight design app",
      views: "10.8k",
      saves: "980",
      earnings: "₹98,500",
      rank: 2,
    },
    {
      id: 3,
      title: "Data prediction",
      description: "AI and machine learning data",
      views: "9.3k",
      saves: "850",
      earnings: "₹87,200",
      rank: 3,
    },
    {
      id: 4,
      title: "Productivity app",
      description: "Time management and productivity",
      views: "8.7k",
      saves: "790",
      earnings: "₹79,300",
      rank: 4,
    },
    {
      id: 5,
      title: "Web app integrations",
      description: "Connect web apps seamlessly",
      views: "7.9k",
      saves: "720",
      earnings: "₹72,100",
      rank: 5,
    },
    {
      id: 6,
      title: "Sales CRM",
      description: "Web-based sales doc management",
      views: "7.2k",
      saves: "680",
      earnings: "₹68,400",
      rank: 6,
    },
    {
      id: 7,
      title: "Automation and workflow",
      description: "Time tracking, invoicing and expenses",
      views: "6.8k",
      saves: "640",
      earnings: "₹64,200",
      rank: 7,
    },
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 p-6 bg-gray-50 min-h-screen">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Sales Overview
              </h1>
              <p className="text-gray-500">
                Your current sales summary and activity.
              </p>
              <h1 className="text-2xl font-bold text-gray-800">
                Quick Stats Panel
              </h1>
            </div>
            <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg">
              <Download size={16} />
              Export
            </button>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">Today's Revenue</p>
              <h2 className="text-2xl font-semibold">₹1,28,000</h2>
              <p className="text-green-500 text-sm">▲ 10%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">Today's Orders</p>
              <h2 className="text-2xl font-semibold">14</h2>
              <p className="text-green-500 text-sm">▲ 12%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">Avg. Order Value</p>
              <h2 className="text-2xl font-semibold">₹1,280</h2>
              <p className="text-red-500 text-sm">▼ 2%</p>
            </div>
          </div>

          {/* Sales Report Chart - Reduced Size */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Sales Report</h3>
              <button className="text-blue-500 text-sm">View report</button>
            </div>
            <div className="h-100">
              <Line data={salesData} />
            </div>
          </div>

          {/* Store Traffic Chart - Reduced Size */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Store Traffic</h3>
              <button className="text-blue-500 text-sm">View report</button>
            </div>
            <div className="h-100">
              <Bar data={trafficData} />
            </div>
          </div>
        </div>

        {/* Right Column - Activity */}
        <div className="w-full lg:w-[300px] xl:w-[350px] flex-shrink-0 bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Activity</h3>
            <button className="text-blue-500 text-sm">View all</button>
          </div>
          <div className="space-y-4 h-full overflow-y-auto max-h-[750px]">
            {activity.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Top Performing Designs
            </h1>
          </div>
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
              <Filter size={16} />
              More filters
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search designs..."
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rank
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Thumbnail
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Views
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Saves
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Earnings
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {designs.map((design) => (
                <tr key={design.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {design.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {design.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {design.description}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {design.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {design.saves}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {design.earnings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FiMoreVertical />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <button className="flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            <FiChevronLeft className="mr-1" />
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page <span className="font-medium">10</span> of{" "}
            <span className="font-medium">10</span>
          </span>
          <button className="flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
            <FiChevronRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
