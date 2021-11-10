import ForecastBar from "../components/Forecast/Bar";
import SearchBar from "../components/Search/Bar";
import useForecast from "../utils/useForecast";

const MainPage = () => {
  const { data, fetchData } = useForecast();
  return (
    <>
      <SearchBar fetchData={fetchData} />
      <ForecastBar data={data} />
    </>
  );
};

export default MainPage;
