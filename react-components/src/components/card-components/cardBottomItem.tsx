import likeIcon from '../../assets/like-icon.svg';
import viewIcon from '../../assets/view-icon.svg';

function CardBottomItem(props: { className: string; views: number; likes: number }) {
  return (
    <div className={props.className}>
      <div className={`${props.className}__item`}>
        <img src={likeIcon} alt="" className="card-icon" />
        <p className="card-likes-txt">{props.likes}</p>
      </div>
      <div className={`${props.className}__item`}>
        <img src={viewIcon} alt="" className="card-icon" />
        <p className="card-views-txt">{props.views}</p>
      </div>
    </div>
  );
}

export default CardBottomItem;
