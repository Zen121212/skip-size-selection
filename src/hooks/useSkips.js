import { useQuery } from "@tanstack/react-query";

const fetchSkips = async () => {
  const res = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  if (!res.ok) throw new Error("Failed to fetch skips");
  return res.json();
};

const useSkips = () => {
  return useQuery({
    queryKey: ["skips"],
    queryFn: fetchSkips,
  });
};

export default useSkips;
