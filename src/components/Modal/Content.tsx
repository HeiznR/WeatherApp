import { FC } from "react";
import { useDispatch } from "react-redux";
import { testActionsTypes } from "../../redux/actions/actions";
import { useTypedSelector } from "../../utils/useTypedSelector";
import "./Content.scss";

const ModalContent: FC = () => {
  const dispatch = useDispatch();
  const error = useTypedSelector((state) => state.fetch.error);
  return (
    <div className="content">
      <div className="content__message">{error.message}</div>
      <button
        className="content__button"
        onClick={() => {
          dispatch({
            type: testActionsTypes.fetchDataError,
            payload: {
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
