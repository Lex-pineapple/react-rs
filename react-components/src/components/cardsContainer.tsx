import { ICardProps } from 'types/interfaces';
import Card from './card';

function CardsContainer(props: { cards: ICardProps[] }) {
  return (
    <div className="cards-container">
      {props.cards.map((item, idx) => {
        return (
          <Card
            key={idx}
            name={item.name}
            date={item.date}
            breed={item.breed}
            sex={item.sex}
            tags={item.tags}
            file={item.file}
            author={item.author}
            views={item.views}
            likes={item.views}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
