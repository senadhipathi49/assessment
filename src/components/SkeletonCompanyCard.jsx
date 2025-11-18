// SkeletonCompanyCard.jsx
export default function SkeletonCompanyCard() {
  return (
    <div className="w-full p-4 rounded-xl border shadow-sm bg-white animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>

      <div className="h-10 bg-gray-300 rounded"></div>
    </div>
  );
}
