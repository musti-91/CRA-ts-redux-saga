export interface ICurrentlyPlaying {}
export interface ICurrentlyPlayingState {
  loading: boolean;
  error?: any;
  data?: ICurrentlyPlaying;
}
