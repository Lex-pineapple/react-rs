import PhotoResultsMapper from '../../helpers/protoResultsMapper';
import { useEffect, useState } from 'react';
import { IPhotoInfoResponse } from 'types/interfaces';
import CardBottomItem from '../card-components/cardBottomItem';
import CardsTagsList from '../card-components/cardsTagsList';

function CardModalFill(props: { id: string }) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState<IPhotoInfoResponse | null>(null);

  useEffect(() => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=b158ecdf6b84a3ae427372f61ddab5b7&photo_id=${props.id}&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [props.id]);

  if (error !== null) {
    return (
      <div className="error-container">
        <p className="error-title">Sorry there was a problem processing your request.</p>
        <p className="error-message">{error.message}</p>
      </div>
    );
  } else if (!isLoaded) {
    return <div className="loader-container">Loading...</div>;
  } else if (item)
    return (
      <>
        <img src={PhotoResultsMapper(item.photo)} className="card-modal-img" />
        <p className="card-modal-title" data-testid="card-modal-title">
          {item.photo.title._content}
        </p>
        <p className="card-modal-date">
          Posted: {new Date(item.photo.dates.taken).toLocaleDateString()}
        </p>
        <p className="card-modal-author">
          by{' '}
          <a href="#" className="card-codal-author-link">
            {item.photo.owner.username}
          </a>
        </p>
        <CardsTagsList
          className="card-modal-tags"
          tags={item.photo.tags.tag.map((item) => item.raw)}
        />
        <CardBottomItem className="card-modal-bottom" views={Number(item.photo.views)} likes={0} />
      </>
    );
  else return <div className="no-response">No response</div>;
}

export default CardModalFill;
