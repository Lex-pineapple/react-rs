import React from 'react';
import likeIcon from '../../assets/like-icon.svg';
import viewIcon from '../../assets/view-icon.svg';

class CardBottomItem extends React.Component<{ views: number; likes: number }> {
  constructor(props: { views: number; likes: number }) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default CardBottomItem;
