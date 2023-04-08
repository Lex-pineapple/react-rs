import PhotoResultsMapper from '../helpers/protoResultsMapper';
import { ICardModalProps } from 'types/interfaces';
import '../styles/components/modal.css';
import Card from './card';
import { getCurrentDate } from '../helpers/getCurrentDate';
import CardBottomItem from './card-components/cardBottomItem';
import CardsTagsList from './card-components/cardsTagsList';

function CardModal(props: ICardModalProps) {
  const showHideClassName = props.show
    ? 'card-modal-container display-block'
    : 'card-modal-container display-none';

  if (props.item) {
    return (
      <div className={showHideClassName} data-testid="modal-window">
        <div className="overlay"></div>
        <div className="modal">
          <section className="card-modal-main">
            <img src={PhotoResultsMapper(props.item)} className="card-modal-img" />
            <p className="card-modal-title">{props.item.title}</p>
            <p className="card-modal-date">{getCurrentDate()}</p>
            <p className="card-modal-author">
              by{' '}
              <a href="#" className="card-codal-author-link">
                admin
              </a>
            </p>
            <CardsTagsList className="card-modal-tags" tags={['photos', 'images']} />
            <CardBottomItem className="card-modal-bottom" views={0} likes={0} />
            <button type="button" onClick={props.handleClose} data-testid="modal-close-btn">
              Close
            </button>
          </section>
        </div>
      </div>
    );
  }
}
export default CardModal;
