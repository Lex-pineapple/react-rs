import { ICardModalProps } from 'types/interfaces';
import '../../styles/components/modal.css';
import CardModalFill from './cardModalFill';

function CardModal(props: ICardModalProps) {
  const showHideClassName = props.show
    ? 'card-modal-container display-block'
    : 'card-modal-container display-none';

  return (
    <div className={showHideClassName} data-testid="modal-window">
      <div className="overlay" onClick={props.handleClose}></div>
      <div className="modal">
        <section className="card-modal-main">
          {(() => {
            if (props.info) {
              return <CardModalFill id={props.info.id} />;
            }
            return <p className="card-modal-error">Could not find card info.</p>;
          })()}
          <p className="modal-close-btn" onClick={props.handleClose} data-testid="modal-close-btn">
            ✕
          </p>
        </section>
      </div>
    </div>
  );
}
export default CardModal;
