import React from 'react';

const VendorHome = () => {
  const topDesigns = [
    {
      title: 'Content curating app',
      subtitle: 'Brings all your news into one place',
    },
    {
      title: 'Design software',
      subtitle: 'Super lightweight design app',
    },
    {
      title: 'Data prediction',
      subtitle: 'AI and machine learning data',
    },
    {
      title: 'Productivity app',
      subtitle: 'Time management and productivity',
    },
    {
      title: 'Web app integrations',
      subtitle: 'Connect web apps seamlessly',
    },
    {
      title: 'Sales CRM',
      subtitle: 'Web-based sales doc management',
    },
    {
      title: 'Automation and workflow',
      subtitle: 'Time tracking, invoicing and expenses',
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Total Listings</h3>
          <p className="text-3xl font-bold mt-2">130</p>
          <p className="text-green-500 text-sm">↑ 100% vs last month</p>
          <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded mt-4">Upload Another</button>
          <div className="text-blue-500 text-sm mt-2 cursor-pointer">View Details</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Inspiration Views</h3>
          <p className="text-3xl font-bold mt-2">196661</p>
          <p className="text-green-500 text-sm">↑ 200% vs last month</p>
          <div className="text-blue-500 text-sm mt-6 cursor-pointer">View report</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Store Rating</h3>
          <p className="text-3xl font-bold mt-2">4.8 / 5</p>
          <p className="text-sm text-gray-400">From 234 reviews</p>
          <div className="text-blue-500 text-sm mt-6 cursor-pointer">View report</div>
        </div>
      </div>

      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Top Performing Designs</h2>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded px-3 py-1 text-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 text-left">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Thumbnail</th>
              <th className="p-3">Title</th>
              <th className="p-3">Views</th>
              <th className="p-3">Saves to Moodboard</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {topDesigns.map((design, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">
                  <img src="https://via.placeholder.com/40" alt="thumb" className="w-12 h-12 rounded-md" />
                </td>
                <td className="p-3">
                  <div className="font-medium">{design.title}</div>
                  <div className="text-gray-500 text-xs">{design.subtitle}</div>
                </td>
                <td className="p-3">👁️ 111999</td>
                <td className="p-3">❤️ 1999</td>
                <td className="p-3">
                  <button className="bg-yellow-400 text-white text-xs px-3 py-1 rounded hover:bg-yellow-500">
                    View Insights
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
          <button className="text-blue-500">Previous</button>
          <span>Page 1 of 10</span>
          <button className="text-blue-500">Next</button>
        </div>
      </div>
    </div>
  );
};

export default VendorHome;
