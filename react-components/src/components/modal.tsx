import React from 'react';
import '../styles/components/modal.css';
interface IModalProps {
  handleClose: () => void;
  show: boolean;
}
class Modal extends React.Component<IModalProps> {
  constructor(props: IModalProps) {
    super(props);
  }

  render(): React.ReactNode {
    const showHideClassName = this.props.show
      ? 'modal-container display-block'
      : 'modal-container display-none';
    return (
      <div className={showHideClassName}>
        <div className="overlay"></div>
        <div className="modal">
          <section className="modal-main">
            <p className="modal-txt">Card created successfully!</p>
            <button type="button" onClick={this.props.handleClose}>
              Close
            </button>
          </section>
        </div>
      </div>
    );
  }
}
export default Modal;
