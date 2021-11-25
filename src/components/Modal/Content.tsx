import { FC } from "react";
import { useDispatch } from "react-redux";
import { fetchDataError } from "../../redux/Slice/Slice";
import { useTypedSelector } from "../../utils/useTypedSelector";
import "./Content.scss";

const ModalContent: FC = () => {
  const dispatch = useDispatch();
  const error = useTypedSelector((state) => state.weather.error);
  return (
    <div className="content">
      <div className="content__message">{error.message}</div>
      <button
        className="content__button"
        onClick={() => {
          dispatch({
            type: fetchDataError,
            payload: {
              message: "",
              errorOccured: false,
            },
          });
        }}
      >
        OK
      </button>
    </div>
  );
};

export default ModalContent;
