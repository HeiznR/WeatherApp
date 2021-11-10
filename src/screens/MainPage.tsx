import SearchBar from "../components/Search/Bar";
import useForecast from "../utils/useForecast";

const MainPage = () => {
  const { fetchData } = useForecast();
  return <SearchBar fetchData={fetchData} />;
};

export default MainPage;
