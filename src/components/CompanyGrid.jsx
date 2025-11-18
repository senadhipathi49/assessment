import React from "react";
import { Building2 } from "lucide-react";
import CompanyCard from "./CompanyCard.jsx";



const CompanyGrid = ({ companies }) => {
    console.log("COMPANIES RECEIVED:", companies);
    
  if (companies.length === 0)
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
        <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-700 mb-2">
          No companies found
        </h3>
        <p className="text-slate-500">
          Try adjusting your filters or search terms
        </p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {companies.map((company, index) => (
        <CompanyCard key={company.id} company={company} index={index} />
      ))}
    </div>
  );
};

export default CompanyGrid;
