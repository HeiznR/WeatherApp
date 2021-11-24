import { useEffect } from "react";
import ForecastBar from "../components/Forecast/Bar";
import SearchBar from "../components/Search/Bar";
import ModalWrapper from "../components/Modal/Wrapper";
import ModalContent from "../components/Modal/Content";
import fetchUsers from "../redux/actionCreators/actionCreator";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../utils/useTypedSelector";
import { testActionsTypes } from "../redux/actions/actions";

const MainPage = () => {
  let dispatch = useDispatch();
  const error = useTypedSelector((state) => state.fetch.error);

  useEffect(() => {
    const succesCallback = (position: any) => {
      let url = `https://the-ultimate-api-challenge.herokuapp.com/api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b66b3fe27f7bea0990712afd47f3ae83`;
      dispatch(fetchUsers(url));
    };
    const errorCallback = () => {
      dispatch({
        type: testActionsTypes.fetchDataError,
        payload: {
          message: "User denied geolocation",
          errorOccured: true,
        },
      });
    };
    navigator.geolocation.getCurrentPosition(succesCallback, errorCallback);
  }, []);

  return (
    <>
      <SearchBar />
      <ForecastBar />
      {error.errorOccured && (
        <ModalWrapper>
          <ModalContent />
        </ModalWrapper>
      )}
    </>
  );
};

export default MainPage;
