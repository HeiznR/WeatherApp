import { FC } from "react";
import { createPortal } from "react-dom";
import "./Wrapper.scss";

const Modal: FC = ({ children }) => {
  return createPortal(<div className="Modal">{children}</div>, document.body);
};

export default Modal;
