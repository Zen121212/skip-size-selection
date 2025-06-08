import { Check } from "lucide-react";

const ProgressIndicator = ({ steps }) => {
  return (
    <div className="w-full bg-white shadow-sm border-b overflow-x-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="sm:flex sm:justify-between sm:gap-0 flex-nowrap overflow-x-auto py-4">
          <div className="flex items-center min-w-max px-1">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center min-w-[64px]">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-colors ${
                      step.completed
                        ? "bg-green-500 text-white"
                        : step.current
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.completed ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs sm:text-sm font-medium text-center ${
                      step.current ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 mx-2 sm:mx-4 flex-1 sm:w-24 ${
                      step.completed ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
