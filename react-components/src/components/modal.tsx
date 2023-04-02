import React from 'react';
import '../styles/components/modal.css';
interface IModalProps {
  handleClose: () => void;
  show: boolean;
}

function Modal(props: IModalProps) {
  const showHideClassName = props.show
    ? 'modal-container display-block'
    : 'modal-container display-none';

  return (
    <div className={showHideClassName}>
      <div className="overlay"></div>
      <div className="modal">
        <section className="modal-main">
          <p className="modal-txt">Card created successfully!</p>
          <button type="button" onClick={props.handleClose}>
            Close
          </button>
        </section>
      </div>
    </div>
  );
}
export default Modal;
