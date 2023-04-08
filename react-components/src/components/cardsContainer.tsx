import { getCurrentDate } from '../helpers/getCurrentDate';
import PhotoResultsMapper from '../helpers/protoResultsMapper';
import { IPhotoResponse } from 'types/interfaces';
import Card from './card';
import { useState } from 'react';
import CardModal from './cardModal';

interface ISearchResultProps {
  error: Error | null;
  isLoaded: boolean;
  items: ISearchResponse;
}

interface ISearchResponse {
  photos: ISearchPhotoResponse;
  stat: string;
}

interface ISearchPhotoResponse {
  page: number;
  pages: number;
  perpage: number;
  photo: IPhotoResponse[];
  total: number;
}

function CardsContainer(props: ISearchResultProps) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState<IPhotoResponse | null>(null);
  function openModal(id: number) {
    setIsOpen(props.items.photos.photo[id]);
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
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
              id={idx}
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
              handleClick={openModal}
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
        <CardModal show={showModal} handleClose={closeModal} item={isOpen} />
      </div>
    );
  }
}

export default CardsContainer;
