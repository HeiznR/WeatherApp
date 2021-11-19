import { FC } from "react";
import { iError } from "../../types/typeError";
import "./Content.scss";

interface iModal {
  error: iError;
  setError: React.Dispatch<React.SetStateAction<iError>>;
}
const ModalContent: FC<iModal> = ({ setError, error }) => {
  return (
    <div className="content">
      <div className="content__message">{error.message}</div>
      <button
        className="content__button"
        onClick={() => {
          setError({ ...error, errorOccured: false });
        }}
      >
        OK
      </button>
    </div>
  );
};

export default ModalContent;
