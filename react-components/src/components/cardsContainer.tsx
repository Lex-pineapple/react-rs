import { getCurrentDate } from '../helpers/getCurrentDate';
import PhotoResultsMapper from '../helpers/protoResultsMapper';
import { IPhotoResponse, IState } from '../types/interfaces';
import { useEffect, useState } from 'react';
import CardModal from './modal-components/cardModal';
import SimpleCard from './card-components/simpleCard';
import { useSelector } from 'react-redux';
import { fetchBySearchValue } from '../api/flickrApiThunks';
import { useAppDispatch, useAppSelector } from '../store/store';

function CardsContainer() {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState<{ id: string } | null>(null);
  const submittedValue = useSelector((state: IState) => state.search.submittedValue);

  const { entities, loading } = useAppSelector((state) => state.searchFetch);

  useEffect(() => {
    dispatch(fetchBySearchValue(submittedValue || 'cat'));
  }, [dispatch, submittedValue]);

  function openModal(id: number) {
    setIsOpen({
      id: entities.photos.photo[id].id,
    });
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  let content;
  if (loading === 'pending' || loading === 'idle') {
    content = (
      <div className="loader-container" data-testid="loader-container">
        Loading...
      </div>
    );
  } else if (loading === 'succeeded') {
    content = (
      <div className="cards-container" data-testid="cards-container">
        {entities.photos.photo.map((item: IPhotoResponse, idx: number) => {
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
  } else if (loading === 'failed') {
    content = (
      <div className="error-container" data-testid="error-container">
        <p className="error-title">Sorry there was a problem processing your request.</p>
      </div>
    );
  }

  return content;
}

export default CardsContainer;
