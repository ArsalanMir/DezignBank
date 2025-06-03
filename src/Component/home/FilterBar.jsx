import React from 'react';

const FilterBar = ({
  categories,
  activeCategory,
  setActiveCategory,
  search,
  setSearch,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            activeCategory === category
              ? 'bg-black text-white border-black'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
          }`}
        >
          {category}
        </button>
      ))}
      <div className="ml-auto relative">
        <input
          type="text"
          placeholder="Search Designbank..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-1.5 border border-gray-300 rounded-md text-sm w-60 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
        />
        {search && (
          <button 
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;