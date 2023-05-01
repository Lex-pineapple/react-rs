import PhotoResultsMapper from '../../helpers/protoResultsMapper';
import { IPhotoInfoTag } from '../../types/interfaces';
import CardBottomItem from '../card-components/cardBottomItem';
import CardsTagsList from '../card-components/cardsTagsList';
import { useGetPhotoInfoQuery } from '../../api/flickrApi';
import { PhotoInfoQueryParams } from '../../types/constants';

function CardModalFill(props: { id: string }) {
  const { data, error, isFetching } = useGetPhotoInfoQuery({
    ...PhotoInfoQueryParams,
    photo_id: props.id || '52821875329',
  });

  let content = <div>No data found</div>;
  if (isFetching) {
    content = <div className="loader-container">Loading...</div>;
  } else if (data) {
    content = (
      <>
        <img src={PhotoResultsMapper(data.photo)} className="card-modal-img" />
        <p className="card-modal-title" data-testid="card-modal-title">
          {data.photo.title._content}
        </p>
        <p className="card-modal-date">
          Posted: {new Date(data.photo.dates.taken).toLocaleDateString()}
        </p>
        <p className="card-modal-author">
          by{' '}
          <a href="#" className="card-codal-author-link">
            {data.photo.owner.username}
          </a>
        </p>
        <CardsTagsList
          className="card-modal-tags"
          tags={data.photo.tags.tag.map((item: IPhotoInfoTag) => item.raw)}
        />
        <CardBottomItem className="card-modal-bottom" views={Number(data.photo.views)} likes={0} />
      </>
    );
  } else if (error) {
    content = (
      <div className="error-container">
        <p className="error-title">Sorry there was a problem processing your request.</p>
      </div>
    );
  }

  return content;
}

export default CardModalFill;
