import { Check, X } from "lucide-react";

const SkipCard = ({
  id,
  size,
  name,
  capacity,
  hirePeriod,
  price,
  image,
  projectExamples,
  allowedOnRoad,
  allowsHeavyWaste,
  isSelected,
  onSelect,
}) => {
  const handleSelect = (e) => {
    e.stopPropagation();
    onSelect(id);
  };

  return (
    <div
      onClick={() => onSelect(id)}
      className={`group relative cursor-pointer rounded-xl transition-all duration-300 ${
        isSelected
          ? "ring-2 ring-green-500"
          : "hover:ring-2 hover:ring-green-500"
      }   text-white shadow-2xl`}
    >
      <div className="bg-white/5 rounded-xl overflow-hidden transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-t-xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute top-4 left-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              {size}
            </span>
          </div>

          <div className="absolute top-4 right-4 space-y-2 text-xs font-semibold text-right">
            <span
              className={`px-2 py-1 rounded flex items-center gap-1 shadow ${
                allowedOnRoad ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {allowedOnRoad ? (
                <Check size={14} strokeWidth={4} />
              ) : (
                <X size={14} strokeWidth={4} />
              )}
              Allowed on Road
            </span>
            <span
              className={`px-2 py-1 rounded flex items-center gap-1 shadow ${
                allowsHeavyWaste ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {allowsHeavyWaste ? (
                <Check size={14} strokeWidth={4} />
              ) : (
                <X size={14} strokeWidth={4} />
              )}
              Heavy Waste
            </span>
          </div>
        </div>

        <div
          className={`p-6 space-y-4 transition-all duration-300 bg-gray-700`}
        >
          <h3 className="text-xl font-bold">{name}</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Capacity:</span>
              <span className="font-semibold text-white">{capacity}</span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>Hire Period:</span>
              <span className="font-semibold text-white">{hirePeriod}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-1">Perfect for:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              {projectExamples.map((example, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  {example}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-500">{price}</span>
            <span className="text-sm text-gray-400">inc. VAT</span>
          </div>

          <button
            onClick={handleSelect}
            className={`w-full px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              isSelected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-600"
            }`}
          >
            {isSelected ? (
              <span className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                Selected
              </span>
            ) : (
              "Select This Skip"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
