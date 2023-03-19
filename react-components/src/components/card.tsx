import React from 'react';
import './card.css';
import catPlaceholder from '../assets/lycanCat.jpg';
import likeIcon from '../assets/like-icon.svg';
import viewIcon from '../assets/view-icon.svg';
import { ICardProps } from 'types/interfaces';

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
        <div className="card-tags">
          <ul className="card-tags-list">
            {this.props.tags.map((item, key) => {
              return (
                <li className="card-tags-list__item" key={key}>
                  #{item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__item">
            <img src={likeIcon} alt="" className="card-icon" />
            <p className="card-likes-txt">{this.props.likes}</p>
          </div>
          <div className="card-bottom__item">
            <img src={viewIcon} alt="" className="card-icon" />
            <p className="card-views-txt">{this.props.views}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
