const SkipCardSkeleton = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-800 to-gray-900 text-white rounded-xl shadow-2xl animate-pulse">
      <div className="bg-white/5 rounded-xl overflow-hidden">
        <div className="relative">
          <div className="w-full h-48 bg-gray-700 rounded-t-xl"></div>

          <div className="absolute top-4 left-4 h-6 w-16 bg-gray-600 rounded-full"></div>

          <div className="absolute top-4 right-4 space-y-2">
            <div className="h-6 w-32 bg-gray-600 rounded-full"></div>
            <div className="h-6 w-32 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="h-6 bg-gray-600 rounded w-3/4"></div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-600 w-24 rounded"></div>
              <div className="h-4 bg-gray-600 w-20 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-600 w-24 rounded"></div>
              <div className="h-4 bg-gray-600 w-20 rounded"></div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <div className="h-4 bg-gray-600 w-24 rounded mb-2"></div>
            <div className="space-y-1">
              <div className="h-3 bg-gray-600 w-40 rounded"></div>
              <div className="h-3 bg-gray-600 w-36 rounded"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-6 w-24 bg-gray-600 rounded"></div>
            <div className="h-4 w-16 bg-gray-600 rounded"></div>
          </div>

          <div className="h-10 bg-gray-600 rounded-md w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkipCardSkeleton;
