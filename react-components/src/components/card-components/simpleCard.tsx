import '../../styles/components/card.css';
import { ISimpleCardProps } from 'types/interfaces';

function SimpleCard(props: ISimpleCardProps) {
  return (
    <div
      className="card-container"
      data-testid="card"
      onClick={() => props.handleClick(props.id)}
      id={String(props.id)}
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

export default SimpleCard;
