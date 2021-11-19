import { useEffect } from "react";
import ForecastBar from "../components/Forecast/Bar";
import SearchBar from "../components/Search/Bar";
import GetLocation from "../utils/useLocation";
import useForecast from "../utils/useForecast";
import ModalWrapper from "../components/Modal/Wrapper";
import ModalContent from "../components/Modal/Content";

const MainPage = () => {
  const { data, fetchData, error, setError } = useForecast();
  useEffect(() => {
    GetLocation(fetchData);
  }, []);

  return (
    <>
      <SearchBar fetchData={fetchData} />
      <ForecastBar data={data} />
      {error.errorOccured && (
        <ModalWrapper>
          <ModalContent error={error} setError={setError} />
        </ModalWrapper>
      )}
    </>
  );
};

export default MainPage;
