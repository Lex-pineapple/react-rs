import '../styles/components/card.css';
import { ICardProps } from 'types/interfaces';
import CardBottomItem from './card-components/cardBottomItem';
import CardTagList from './card-components/cardsTagsList';

function Card(props: ICardProps) {
  return (
    <div
      className="card-container"
      data-testid="card"
      onClick={() => props.handleClick(props.id)}
      id={props.id}
    >
      <div className="card-image-wrapper">
        <img src={props.file} alt="cat-picture" className="card-mainImg" />
        <div className="card-date-container">
          Date of birth: <p className="card-date">{props.date}</p>
        </div>
      </div>
      <div className="card-sex-container">
        <p className="card-mainName">
          {(() => {
            if (props.name.length > 19) return props.name.slice(0, 19) + '...';
            return props.name;
          })()}
        </p>
      </div>
    </div>
  );
}

export default Card;
