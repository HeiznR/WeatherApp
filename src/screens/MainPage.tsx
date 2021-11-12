import { useEffect } from "react";
import ForecastBar from "../components/Forecast/Bar";
import SearchBar from "../components/Search/Bar";
import GetLocation from "../utils/useLocation";
import useForecast from "../utils/useForecast";

const MainPage = () => {
  const { data, fetchData } = useForecast();
  useEffect(() => {
    GetLocation(fetchData);
  }, []);
  return (
    <>
      <SearchBar fetchData={fetchData} />
      <ForecastBar data={data} />
    </>
  );
};

export default MainPage;
