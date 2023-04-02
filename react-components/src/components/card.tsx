import '../styles/components/card.css';
import { ICardProps, IForm } from 'types/interfaces';
import CardBottomItem from './card-components/cardBottomItem';
import CardTagList from './card-components/carsTagsList';

function Card(props: IForm) {
  return (
    <div className="card-container">
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
      <CardTagList tags={props.tags} />
      <CardBottomItem views={props.views} likes={props.likes} />
    </div>
  );
}

export default Card;
