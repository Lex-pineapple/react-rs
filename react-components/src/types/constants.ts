export const SearchQueryParams = {
  method: 'flickr.photos.search',
  api_key: 'b158ecdf6b84a3ae427372f61ddab5b7',
  text: 'cat',
  per_page: 10,
  format: 'json',
  nojsoncallback: 1,
};

export const PhotoInfoQueryParams = {
  method: 'flickr.photos.getInfo',
  api_key: 'b158ecdf6b84a3ae427372f61ddab5b7',
  photo_id: '52821875329',
  format: 'json',
  nojsoncallback: 1,
};
