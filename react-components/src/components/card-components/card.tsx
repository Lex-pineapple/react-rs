import '../../styles/components/card.css';
import { ICardProps } from '../../types/interfaces';
import CardTagList from './cardsTagsList';
import CardBottomItem from './cardBottomItem';

function Card(props: ICardProps) {
  return (
    <div className="card-container" data-testid="card">
      <div className="card-image-wrapper">
        <img src={props.file} alt="cat-picture" className="card-mainImg" />
      </div>
      <div className="card-date-container">
        Date of birth: <p className="card-date">{props.date}</p>
      </div>
      <div className="card-sex-container">
        <p className="card-mainName">{props.name}</p>
        <p className="card-sex">{props.sex}</p>
      </div>
      <p className="card-breed">{props.breed}</p>
      <p className="card-author">
        by{' '}
        <a href="" className="card__link">
          {props.author}
        </a>
      </p>
      <CardTagList tags={props.tags} className="card-tags" />
      <CardBottomItem views={props.views} likes={props.likes} className="card-bottom" />
    </div>
  );
}

export default Card;
