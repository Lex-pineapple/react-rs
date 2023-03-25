import React from 'react';
import './card.css';
import { ICardProps } from 'types/interfaces';
import CardBottomItem from './card-components/cardBottomItem';
import CardTagList from './card-components/carsTagsList';

class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card-container" >
        <img src={this.props.image} alt="cat-picture" className="card-mainImg" />
        <div className="card-date-container">
          Added: <p className="card-date">{this.props.date}</p>
        </div>
        <div className="card-sex-container">
        <p className="card-mainName">{this.props.cardName}</p>
          <p className="card-sex">{this.props.sex}</p>
        </div>
          <p className="card-breed">{this.props.breed}</p>
        <p className="card-author">
          by <a href="">{this.props.author}</a>
        </p>
        <CardTagList tags={this.props.tags} />
        <CardBottomItem views={this.props.views} likes={this.props.likes} />
      </div>
    );
  }
}

export default Card;
