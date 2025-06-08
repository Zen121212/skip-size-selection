import { ArrowLeft, ArrowRight } from "lucide-react";

const StickyFooter = ({ selectedSkip }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {selectedSkip && (
              <div className="text-center sm:text-right">
                <p className="font-semibold text-gray-900">
                  <span className="block sm:inline text-base sm:text-lg font-medium">
                    {selectedSkip.name}
                  </span>
                  <span className="block sm:inline text-3xl font-bold text-blue-600 sm:ml-4">
                    {selectedSkip.price}
                  </span>
                  <span className="block sm:inline text-sm text-gray-400 sm:ml-4">
                    ({selectedSkip.hire_period_days})
                  </span>
                </p>
              </div>
            )}
            <button
              disabled={!selectedSkip}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-colors ${
                selectedSkip
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
