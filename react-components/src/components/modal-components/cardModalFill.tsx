import PhotoResultsMapper from '../../helpers/protoResultsMapper';
import { IPhotoInfoTag } from 'types/interfaces';
import CardBottomItem from '../card-components/cardBottomItem';
import CardsTagsList from '../card-components/cardsTagsList';
import { useGetPhotoInfoQuery } from '../../api/flickrApi';
import { PhotoInfoQueryParams } from '../../types/constants';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useEffect } from 'react';
import { fetchByPhotoId } from '../../api/flickrApiThunks';

function CardModalFill(props: { id: string }) {
  // const { data, error, isLoading } = useGetPhotoInfoQuery({
  //   ...PhotoInfoQueryParams,
  //   photo_id: props.id || '52821875329',
  // });
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.photoDataFetch);
  useEffect(() => {
    dispatch(fetchByPhotoId(props.id || '52821875329'));
    // if (loading === 'idle') {
    // }
  }, [dispatch, props.id]);

  let content;
  if (loading === 'pending') {
    content = <div className="loader-container">Loading...</div>;
  } else if (loading === 'succeeded') {
    content = (
      <>
        <img src={PhotoResultsMapper(entities.photo)} className="card-modal-img" />
        <p className="card-modal-title" data-testid="card-modal-title">
          {entities.photo.title._content}
        </p>
        <p className="card-modal-date">
          Posted: {new Date(entities.photo.dates.taken).toLocaleDateString()}
        </p>
        <p className="card-modal-author">
          by{' '}
          <a href="#" className="card-codal-author-link">
            {entities.photo.owner.username}
          </a>
        </p>
        <CardsTagsList
          className="card-modal-tags"
          tags={entities.photo.tags.tag.map((item: IPhotoInfoTag) => item.raw)}
        />
        <CardBottomItem
          className="card-modal-bottom"
          views={Number(entities.photo.views)}
          likes={0}
        />
      </>
    );
  } else if (loading === 'failed') {
    content = (
      <div className="error-container">
        <p className="error-title">Sorry there was a problem processing your request.</p>
        {/* <p className="error-message">{errMsg}</p> */}
      </div>
    );
  }

  return content;
  // if (loading == 'failed') {
  //   let errMsg;
  //   // if ('status' in error) {
  //   //   errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
  //   // } else errMsg = error.message;
  //   return (
  //     <div className="error-container">
  //       <p className="error-title">Sorry there was a problem processing your request.</p>
  //       {/* <p className="error-message">{errMsg}</p> */}
  //     </div>
  //   );
  // } else if (loading == 'pending') {
  //   return <div className="loader-container">Loading...</div>;
  // } else if (entities)
  //   return (
  //     <>
  //       <img src={PhotoResultsMapper(entities.photo)} className="card-modal-img" />
  //       <p className="card-modal-title" data-testid="card-modal-title">
  //         {entities.photo.title._content}
  //       </p>
  //       <p className="card-modal-date">
  //         Posted: {new Date(entities.photo.dates.taken).toLocaleDateString()}
  //       </p>
  //       <p className="card-modal-author">
  //         by{' '}
  //         <a href="#" className="card-codal-author-link">
  //           {entities.photo.owner.username}
  //         </a>
  //       </p>
  //       <CardsTagsList
  //         className="card-modal-tags"
  //         tags={entities.photo.tags.tag.map((item: IPhotoInfoTag) => item.raw)}
  //       />
  //       <CardBottomItem
  //         className="card-modal-bottom"
  //         views={Number(entities.photo.views)}
  //         likes={0}
  //       />
  //     </>
  //   );
  // else return <div className="no-response">No response</div>;
}

export default CardModalFill;
