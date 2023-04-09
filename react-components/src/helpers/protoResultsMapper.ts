import { IPhotoInfo, IPhotoResponse } from 'types/interfaces';

/**
 * Takes the object and return a link to image.
 *
 * @param {IPhotoResponse | IPhotoInfo}   photoItem        Object that contains parameters 'server', 'id' and 'secret'.
 *
 * @return {string} Returns the link to flickr photo.
 */

function PhotoResultsMapper(photoItem: IPhotoResponse | IPhotoInfo) {
  return `https://live.staticflickr.com/${photoItem.server}/${photoItem.id}_${photoItem.secret}_z.jpg`;
}

export default PhotoResultsMapper;