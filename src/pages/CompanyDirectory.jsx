import React, { useState, useEffect, useMemo } from "react";
import { companiesData } from "../data/companiesData.js";


import Header from "../components/Headers";
import Filters from "../components/Filters";
import CompanyGrid from "../components/CompanyGrid";
import Pagination from "../components/Pagination";
import SkeletonCompanyCard from "../components/SkeletonCompanyCard";


const CompanyDirectory = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  // Load data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCompanies(companiesData);
      setLoading(false);
    }, 1500);
  }, []);

  const industries = ["All", ...new Set(companies.map((c) => c.industry))];
  const locations = ["All", ...new Set(companies.map((c) => c.location))];

  const filteredAndSorted = useMemo(() => {
    let filtered = companies.filter((c) => {
      const search = searchTerm.toLowerCase();
      return (
        (c.name.toLowerCase().includes(search) ||
          c.industry.toLowerCase().includes(search)) &&
        (selectedIndustry === "All" || c.industry === selectedIndustry) &&
        (selectedLocation === "All" || c.location === selectedLocation)
      );
    });

    filtered.sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];

      if (["employees", "founded"].includes(sortBy)) {
        aVal = Number(aVal);
        bVal = Number(bVal);
      }

      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [
    companies,
    searchTerm,
    selectedIndustry,
    selectedLocation,
    sortBy,
    sortOrder,
  ]);

  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);

  const paginatedCompanies = filteredAndSorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  if (loading)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, idx) => (
          <SkeletonCompanyCard key={idx} />
        ))}
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header total={companies.length} filtered={filteredAndSorted.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={(v) => {
            setSearchTerm(v);
            setCurrentPage(1);
          }}
          industries={industries}
          locations={locations}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={(v) => {
            setSelectedIndustry(v);
            setCurrentPage(1);
          }}
          selectedLocation={selectedLocation}
          setSelectedLocation={(v) => {
            setSelectedLocation(v);
            setCurrentPage(1);
          }}
          handleSort={handleSort}
          sortBy={sortBy}
        />

        <CompanyGrid companies={paginatedCompanies} />

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CompanyDirectory;
