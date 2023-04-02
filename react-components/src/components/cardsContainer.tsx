import { ICardProps, IForm } from 'types/interfaces';
import Card from './card';

function CardsContainer(props: { cards: IForm[] }) {
  return (
    <div className="cards-container">
      {props.cards.map((item, idx) => {
        return (
          <Card
            key={idx}
            file={item.file}
            date={item.date}
            sex={item.sex}
            breed={item.breed}
            author={item.author}
            name={item.name}
            views={item.views}
            likes={item.views}
            tags={item.tags}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
