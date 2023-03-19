import React from 'react';
import './card.css';
import catPlaceholder from '../assets/lycanCat.jpg';
import likeIcon from '../assets/like-icon.svg';
import viewIcon from '../assets/view-icon.svg';

interface ICardProps {
  author: string;
  cardName: string;
  views: number;
  likes: number;
  tags: string[];
}

function Card(props: ICardProps) {
  return (
    <div className="card-container">
      <img src={catPlaceholder} alt="cat-picture" className="card-mainImg" />
      <p className="card-mainName">{props.cardName}</p>
      <p className="card-author">
        by <a href="">{props.author}</a>
      </p>
      <div className="card-tags">
        <ul className="card-tags-list">
          {props.tags.map((item, key) => {
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
          <p className="card-likes-txt">{props.likes}</p>
        </div>
        <div className="card-bottom__item">
          <img src={viewIcon} alt="" className="card-icon" />
          <p className="card-views-txt">{props.views}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
