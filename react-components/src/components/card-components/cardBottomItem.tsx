import likeIcon from '../../assets/like-icon.svg';
import viewIcon from '../../assets/view-icon.svg';

function CardBottomItem(props: { views: number; likes: number }) {
  return (
    <div className="card-bottom">
      <div className="card-bottom__item">
        <img src={likeIcon} alt="" className="card-icon" />
        <p className="card-likes-txt">{props.likes}</p>
      </div>
      <div className="card-bottom__item">
        <img src={viewIcon} alt="" className="card-icon" />
        <p className="card-views-txt">{props.views}</p>
      </div>
    </div>
  );
}

export default CardBottomItem;
