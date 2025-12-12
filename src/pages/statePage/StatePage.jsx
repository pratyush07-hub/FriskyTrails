import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import TopDestinations from "./components/TopDestinations";
import PopularFoods from "./components/PopularFoods";
import TopHotels from "./components/TopHotels";
import { StateData } from "./StateData";
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "../../components/NotFound";

const StatePage = () => {
  const { slug } = useParams();
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchState = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await StateData(slug || "");
      setStateData(res);
    } catch (err) {
      console.error('Error fetching state data:', err);
      setError('Failed to load state data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchState();
  }, [slug]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={fetchState}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!stateData?.state) {
    return <NotFound />;
  }

  const { state } = stateData;

  return (
    <div className="min-h-screen">
      <HeroBanner state={state} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {state.topDestinations?.length > 0 && (
          <TopDestinations 
            destinations={state.topDestinations} 
            stateName={state.name} 
          />
        )}
        {state.popularFoods?.length > 0 && (
          <PopularFoods foods={state.popularFoods} />
        )}
        {state.topHotels?.length > 0 && (
          <TopHotels hotels={state.topHotels} />
        )}
      </main>
    </div>
  );
};

export default StatePage;