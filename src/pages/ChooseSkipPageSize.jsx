import { useState } from "react";
import ProgressIndicator from "../components/ProgressIndicator";
import SkipCard from "../components/SkipCard";
import SkipCardSkeleton from "../components/SkipCardSkeleton";
import StickyFooter from "../components/Footer";
import useSkips from "../hooks/useSkips";

const Index = () => {
  const [selectedSkipId, setSelectedSkipId] = useState(null);

  const { data: skipsData, isLoading, error } = useSkips();

  const steps = [
    { label: "Postcode", completed: true, current: false },
    { label: "Waste Type", completed: true, current: false },
    { label: "Select Skip", completed: false, current: true },
    { label: "Permit Check", completed: false, current: false },
    { label: "Choose Date", completed: false, current: false },
    { label: "Payment", completed: false, current: false },
  ];

  const selectedSkip = skipsData?.find((skip) => skip.id === selectedSkipId);

  const handleSkipSelect = (skipId) => {
    setSelectedSkipId((prevId) => (prevId === skipId ? null : skipId));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <ProgressIndicator steps={steps} />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Skip Size
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the skip size that best suits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8">
            {[...Array(6)].map((_, index) => (
              <SkipCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">
          Error loading skips: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <ProgressIndicator steps={steps} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Skip Size
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8">
          {skipsData?.map((skip) => (
            <SkipCard
              key={skip.id}
              id={skip.id}
              size={`${skip.size} Yard`}
              name={`${skip.size} Yard Skip`}
              capacity={`${skip.size} cubic yards`}
              hirePeriod={`${skip.hire_period_days} days`}
              price={`£${(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(
                2
              )}`}
              image="https://st2.depositphotos.com/1323882/9535/i/450/depositphotos_95355790-stock-photo-yellow-waste-skip.jpg"
              projectExamples={
                skip.allows_heavy_waste
                  ? ["Heavy waste disposal", "Construction debris"]
                  : ["General waste", "Garden clearance"]
              }
              allowedOnRoad={skip.allowed_on_road}
              allowsHeavyWaste={skip.allows_heavy_waste}
              isSelected={selectedSkipId === skip.id}
              onSelect={handleSkipSelect}
            />
          ))}
        </div>
      </div>

      <StickyFooter
        selectedSkip={
          selectedSkip
            ? {
                name: `${selectedSkip.size} Yard Skip`,
                price: `£${(
                  selectedSkip.price_before_vat *
                  (1 + selectedSkip.vat / 100)
                ).toFixed(2)}`,
                hire_period_days: `${selectedSkip.hire_period_days} day hire`,
              }
            : undefined
        }
      />
    </div>
  );
};

export default Index;
