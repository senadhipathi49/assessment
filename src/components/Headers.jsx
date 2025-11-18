import React from "react";
import { Building2 } from "lucide-react";

const Header = ({ total, filtered }) => {
  return (
    <div className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-xl shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Company Directory
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Discover {total} innovative companies
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-indigo-50 px-4 py-2 rounded-lg">
              <span className="text-indigo-700 font-semibold">{filtered}</span>
              <span className="text-slate-600 text-sm ml-1">Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
