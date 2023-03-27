import React from 'react';
import { ICardProps } from 'types/interfaces';
import Card from './card';

class CardsContainer extends React.Component<{ cards: ICardProps[] }> {
  constructor(props: { cards: ICardProps[] }) {
    super(props);
  }

  render() {
    return (
      <div className="cards-container">
        {this.props.cards.map((item, idx) => {
          return (
            <Card
              key={idx}
              image={item.image}
              date={item.date}
              sex={item.sex}
              breed={item.breed}
              author={item.author}
              cardName={item.cardName}
              views={item.views}
              likes={item.views}
              tags={item.tags}
            />
          );
        })}
      </div>
    );
  }
}

export default CardsContainer;
