import ReactDom from "react-dom";
import PropTypes from "prop-types";
import "./modal.css";
import { RightSide } from "../RightSide/RightSide";

export default function Modal({ open, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal">
        <div className="content">
          <button onClick={onClose} className="close">x</button>
            <div className="con">
                <RightSide />
            </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
