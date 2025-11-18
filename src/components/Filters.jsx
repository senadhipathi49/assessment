import React from "react";
import { Search, Filter, ChevronDown, MapPin } from "lucide-react";

const Filters = ({
  searchTerm,
  setSearchTerm,
  industries,
  locations,
  selectedIndustry,
  setSelectedIndustry,
  selectedLocation,
  setSelectedLocation,
  handleSort,
  sortBy,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Search */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Search Companies
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or industry..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Industry
          </label>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none transition-all bg-white"
            >
              {industries.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none transition-all bg-white"
            >
              {locations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-slate-200">
        <span className="text-sm font-semibold text-slate-700">Sort by:</span>

        {[
          { label: "Name", value: "name" },
          { label: "Employees", value: "employees" },
          { label: "Founded", value: "founded" },
          { label: "Revenue", value: "revenue" },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => handleSort(option.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
              sortBy === option.value
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
