import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { Pencil, MoreVertical } from 'lucide-react';

const stats = [
  {
    title: "Total Listings",
    iconBg: "bg-orange-100",
    icon: "📄",
    value: "2,000",
    change: "100%",
    changeColor: "text-green-500",
    subtitle: "vs last month",
    extra: ["Upload Design: 32", "Mood Boards: 22"],
    footer: "View Details",
  },
  {
    title: "Monthly Earnings",
    iconBg: "bg-green-100",
    icon: "₹",
    value: "196,661",
    change: "20%",
    changeColor: "text-green-500",
    subtitle: "vs last month",
    chart: true,
    footer: "View report",
  },
  {
    title: "Total Downloads",
    iconBg: "bg-orange-100",
    icon: "⬇️",
    value: "3,161",
    change: "20%",
    changeColor: "text-green-500",
    subtitle: "vs last month",
    chart: true,
    footer: "View report",
  },
  {
    title: "Pending Approvals",
    iconBg: "bg-orange-100",
    icon: "⏱️",
    value: "32",
    subtitle: "Average 2 days review time",
  },
  {
    title: "Seller Support Center",
    iconBg: "bg-orange-100",
    icon: "🕒",
    value: "11",
    subtitle: "98% response rate",
    badge: "New Ticket",
  },
  {
    title: "Store Avg reviews",
    iconBg: "bg-orange-100",
    icon: "⭐",
    value: "4.8/5",
    subtitle: "From 234 reviews",
  },
];

const listings = [
  {
    title: 'Content curating app',
    subtitle: 'Brings all your news into one place',
    type: 'Design',
    status: 'Approved',
    price: '₹11,999',
    image: '/thumb.png',
    checked: true,
  },
  {
    title: 'Design software',
    subtitle: 'Super lightweight design app',
    type: 'Moodboard',
    status: 'In Review',
    price: '₹1,999',
    checked: false,
  },
  {
    title: 'Wireframe kit',
    subtitle: 'Complete wireframing package',
    type: 'Design',
    status: 'Approved',
    price: '₹8,499',
    image: '/thumb.png',
    checked: true,
  },
  {
    title: 'Dashboard template',
    subtitle: 'Analytics dashboard components',
    type: 'Template',
    status: 'Rejected',
    price: '₹6,999',
    checked: false,
  },
];

export default function StatsPanel() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Quick Stats Panel</h2>
          <div className="flex gap-2">
            {["1 day", "1 week", "1 month", "1 year", "All"].map((item, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-lg text-sm border border-gray-200 transition-all ${
                  i === 0 
                    ? "bg-gray-800 text-white font-medium border-gray-800" 
                    : "bg-white hover:bg-gray-100 text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                <FiMoreVertical />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full ${card.iconBg} text-lg`}>{card.icon}</div>
                <div className="text-base font-medium text-gray-700">{card.title}</div>
              </div>
              <div className="text-3xl font-semibold mb-2 text-gray-800">{card.value}</div>
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className={`${card.changeColor} font-medium`}>↑ {card.change}</span>
                <span className="text-gray-500">{card.subtitle}</span>
              </div>

              {card.extra && (
                <div className="flex gap-2 text-sm text-gray-600 mb-4">
                  {card.extra.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {card.chart && (
                <div className="h-12 w-full bg-gradient-to-r from-green-100 to-transparent rounded-md mt-4"></div>
              )}

              <div className="text-sm text-orange-500 mt-4 font-medium cursor-pointer hover:text-orange-600 transition-colors">
                {card.footer}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.slice(3).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                <FiMoreVertical />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full ${card.iconBg} text-lg`}>{card.icon}</div>
                <div className="text-base font-medium text-gray-700">{card.title}</div>
              </div>
              <div className="text-3xl font-semibold mb-2 text-gray-800">{card.value}</div>
              <div className="flex items-center gap-2 text-sm">
                {card.badge && (
                  <span className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
                    {card.badge}
                  </span>
                )}
                <span className="text-gray-500">{card.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Listings Table */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6">
            <div className="flex space-x-4 text-sm font-semibold mb-4 md:mb-0 overflow-x-auto pb-2">
              <span className="border-b-2 border-orange-500 pb-2 text-orange-500">Recent Listings</span>
              <span className="hover:text-orange-500 cursor-pointer transition-colors">All submit file</span>
              <span className="hover:text-orange-500 cursor-pointer transition-colors">Draft</span>
              <span className="hover:text-orange-500 cursor-pointer transition-colors">In Review</span>
              <span className="text-red-500 hover:text-red-600 cursor-pointer transition-colors">
                Rejected <span className="bg-red-100 rounded-full px-2 py-0.5 text-xs">12</span>
              </span>
            </div>
            <input
              className="px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all"
              placeholder="Search..."
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3 px-4"><input type="checkbox" className="rounded text-orange-500 focus:ring-orange-400" /></th>
                  <th className="pb-3 px-4">Thumbnail</th>
                  <th className="pb-3 px-4">Title</th>
                  <th className="pb-3 px-4">File Type</th>
                  <th className="pb-3 px-4">Status</th>
                  <th className="pb-3 px-4">Price (INR)</th>
                  <th className="pb-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <input 
                        type="checkbox" 
                        defaultChecked={item.checked} 
                        className="rounded text-orange-500 focus:ring-orange-400"
                      />
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-16 h-16 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                        {item.image ? (
                          <img src={item.image} className="w-full h-full object-cover" alt="thumb" />
                        ) : (
                          <span className="text-gray-400">No image</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-800">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.subtitle}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        item.type === 'Design' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : item.type === 'Moodboard' 
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        item.status === 'Approved' 
                          ? 'bg-green-100 text-green-600' 
                          : item.status === 'In Review'
                            ? 'bg-orange-100 text-orange-600'
                            : 'bg-red-100 text-red-600'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800">{item.price}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Pencil size={16} className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
                        <MoreVertical size={16} className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm">
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <span className="text-gray-500">Page 1 of 10</span>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}