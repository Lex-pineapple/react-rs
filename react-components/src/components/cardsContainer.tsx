import React from 'react';
import './card.css';
import { ICardProps } from 'types/interfaces';

class CardsContainer extends React.Component<ICardProps[]> {
  constructor(props: ICardProps[]) {
    super(props);
  }

  render() {
    return <div className="cards-container"></div>;
  }
}

export default CardsContainer;
