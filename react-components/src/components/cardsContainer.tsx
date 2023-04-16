import { getCurrentDate } from '../helpers/getCurrentDate';
import PhotoResultsMapper from '../helpers/protoResultsMapper';
import { IPhotoResponse, IState } from 'types/interfaces';
import { useState } from 'react';
import CardModal from './modal-components/cardModal';
import SimpleCard from './card-components/simpleCard';
import { SearchQueryParams } from '../types/constants';
import { useGetSearchResultsQuery } from '../api/flickrApi';
import { useSelector } from 'react-redux';

function CardsContainer() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState<{ id: string } | null>(null);
  const submittedValue = useSelector((state: IState) => state.search.submittedValue);

  const { data, error, isLoading } = useGetSearchResultsQuery({
    ...SearchQueryParams,
    text: submittedValue || 'cat',
  });

  function openModal(id: number) {
    setIsOpen({
      id: data.photos.photo[id].id,
    });
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  if (error) {
    let errMsg;
    if ('status' in error) {
      errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
    } else errMsg = error.message;
    return (
      <div className="error-container" data-testid="error-container">
        <p className="error-title">Sorry there was a problem processing your request.</p>
        <p className="error-message">{errMsg}</p>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="loader-container" data-testid="loader-container">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="cards-container" data-testid="cards-container">
        {data.photos.photo.map((item: IPhotoResponse, idx: number) => {
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
