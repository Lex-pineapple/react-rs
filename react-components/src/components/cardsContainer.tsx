import { getCurrentDate } from '../helpers/getCurrentDate';
import PhotoResultsMapper from '../helpers/protoResultsMapper';
import { ISearchResultProps } from 'types/interfaces';
import { useState } from 'react';
import CardModal from './modal-components/cardModal';
import SimpleCard from './card-components/simpleCard';

function CardsContainer(props: ISearchResultProps) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState<{ id: string } | null>(null);

  function openModal(id: number) {
    setIsOpen({
      id: props.items.photos.photo[id].id,
    });
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  if (props.error !== null) {
    return (
      <div className="error-container">
        <p className="error-title">Sorry there was a problem processing your request.</p>
        <p className="error-message">{props.error.message}</p>
      </div>
    );
  } else if (!props.isLoaded) {
    return <div className="loader-container">Loading...</div>;
  } else {
    return (
      <div className="cards-container">
        {props.items.photos.photo.map((item, idx) => {
          return (
            <SimpleCard
              id={idx}
              key={idx}
              file={PhotoResultsMapper(item)}
              date={getCurrentDate()}
              name={item.title}
              handleClick={openModal}
            />
          );
        })}
        <CardModal show={showModal} handleClose={closeModal} info={isOpen} />
      </div>
    );
  }
}

export default CardsContainer;
