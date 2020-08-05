export interface ISaveAlbum {}
export interface ISaveAlbumState {
  loading: boolean;
  error?: any;
  data?: ISaveAlbum;
}
