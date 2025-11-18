import React from "react";
import {
  Building2,
  Briefcase,
  MapPin,
  User,
  Globe,
  Star,
  TrendingUp,
} from "lucide-react";

const CompanyCard = ({ company }) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
      {/* TOP GRADIENT BAR */}
      <div className="h-20 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>

      {/* MAIN CONTENT */}
      <div className="p-6">
        {/* ICON + TITLE */}
        <div className="flex items-start gap-4">
          <div className="bg-white shadow-lg p-4 rounded-2xl -mt-10">
            <Building2 className="w-7 h-7 text-indigo-600" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-slate-900">
              {company.name}
            </h2>
            <p className="text-slate-500">{company.description}</p>
          </div>

          {/* Status Badge */}
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
            Active
          </span>
        </div>

        {/* BASIC INFO */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2 text-slate-700">
            <Briefcase className="w-4 h-4 text-indigo-500" />
            <span>{company.industry}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span>{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <User className="w-4 h-4 text-indigo-500" />
            <span>{company.ceo}</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-500">
            <Globe className="w-4 h-4" />
            <a
              href={company.website}
              className="text-indigo-600 hover:underline"
            >
              {company.website}
            </a>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="mt-6 bg-slate-50 rounded-xl p-5">
          <div className="grid grid-cols-4 text-center">
            <div>
              <p className="text-slate-500 text-sm">EMPLOYEES</p>
              <p className="text-lg font-bold text-slate-800">
                {company.employees}
              </p>
            </div>

            <div>
              <p className="text-slate-500 text-sm">REVENUE</p>
              <p className="text-lg font-bold text-slate-800">
                {company.revenue}
              </p>
            </div>

            <div>
              <p className="text-slate-500 text-sm">FOUNDED</p>
              <p className="text-lg font-bold text-slate-800">
                {company.founded}
              </p>
            </div>

            <div>
              <p className="text-slate-500 text-sm">RATING</p>
              <div className="flex justify-center items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-lg font-bold text-slate-800">
                  {company.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GROWING TAG */}
        <div className="mt-4 flex items-center gap-2 bg-green-50 px-3 py-1 rounded-md w-fit">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-green-700 text-sm font-medium">Growing</span>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <button className="w-full py-4 bg-[#0C1322] text-white font-medium text-lg hover:bg-[#111a2d] transition">
        View Details
      </button>
    </div>
  );
};

export default CompanyCard;
