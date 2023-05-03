import { getCurrentDate } from '../helpers/getCurrentDate';
import PhotoResultsMapper from '../helpers/protoResultsMapper';
import { IPhotoResponse, IState } from '../types/interfaces';
import { useEffect, useState } from 'react';
import CardModal from './modal-components/cardModal';
import SimpleCard from './card-components/simpleCard';
import { useSelector } from 'react-redux';
import { useGetSearchResultsQuery } from '../api/flickrApi';
import { SearchQueryParams } from '../types/constants';

function CardsContainer() {
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState<{ id: string } | null>(null);
  const submittedValue = useSelector((state: IState) => state.search.submittedValue);

  useEffect(() => {
    setInputValue(submittedValue);
  }, [submittedValue]);

  const { data, error, isFetching } = useGetSearchResultsQuery({
    ...SearchQueryParams,
    text: inputValue || 'cat',
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

  let content = <div>No data found</div>;
  if (isFetching) {
    content = (
      <div className="loader-container" data-testid="loader-container">
        Loading...
      </div>
    );
  } else if (data) {
    content = (
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
  } else if (error) {
    content = (
      <div className="error-container" data-testid="error-container">
        <p className="error-title">Sorry there was a problem processing your request.</p>
      </div>
    );
  }

  return content;
}

export default CardsContainer;
