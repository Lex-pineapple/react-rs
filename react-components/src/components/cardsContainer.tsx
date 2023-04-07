import { getCurrentDate } from '../helpers/getCurrentDate';
import PhotoResultsMapper from '../helpers/protoResultsMapper';
import { IPhotoResponse } from 'types/interfaces';
import Card from './card';

interface ISearchResultProps {
  error: Error | null;
  isLoaded: boolean;
  items: IPhotoResponse[];
}

function CardsContainer(props: ISearchResultProps) {
  if (props.error !== null) {
    console.log('error fire');

    return (
      <div className="error-container">
        <p className="error-title">Sorry there was a problem processing your request.</p>
        <p className="error-message">{props.error.message}</p>
      </div>
    );
  } else if (!props.isLoaded) {
    console.log('loading fire');

    return <div className="loader-container">Loading...</div>;
  } else {
    console.log('items fire');

    return (
      <div className="cards-container">
        {props.items.photos.photo.map((item, idx) => {
          return (
            <Card
              key={idx}
              file={PhotoResultsMapper(item)}
              date={getCurrentDate()}
              sex="Girl"
              breed="Other"
              author="admin"
              name={item.title}
              views={0}
              likes={0}
              tags={['photos']}
            />
          );
        })}
        {/* {props.cards.map((item, idx) => {
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
        })} */}
      </div>
    );
  }
}

export default CardsContainer;
