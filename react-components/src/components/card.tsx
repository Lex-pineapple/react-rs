import React from 'react';
import './card.css';
import catPlaceholder from '../assets/lycanCat.jpg';
import { ICardProps } from 'types/interfaces';
import CardBottomItem from './card-components/cardBottomItem';
import CardTagList from './card-components/carsTagsList';

class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <img src={catPlaceholder} alt="cat-picture" className="card-mainImg" />
        <p className="card-mainName">{this.props.cardName}</p>
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
