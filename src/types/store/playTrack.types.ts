export interface IPlayTrack {}
export interface IPlayTrackState {
  loading: boolean;
  error?: any;
  data?: IPlayTrack;
}
