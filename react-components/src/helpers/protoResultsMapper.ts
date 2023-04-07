import { IPhotoResponse } from 'types/interfaces';

function PhotoResultsMapper(photoItem: IPhotoResponse) {
  return `https://live.staticflickr.com/${photoItem.server}/${photoItem.id}_${photoItem.secret}_z.jpg`;
}

export default PhotoResultsMapper;