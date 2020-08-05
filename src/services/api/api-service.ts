import { AxiosPromise, AxiosInstance } from 'axios';
interface Response {
  data?: any; // todo:should be more optimized
}
class ApiService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  // Typing can be better here.
  public fetchTokens(code: string): AxiosPromise<any> {
    return this.api.get('/callback', { params: { code } }).then(response => response);
  }

  /**
   * fetchProfile data
   * @param accessToken string
   */
  public fetchProfile(accessToken: string): AxiosPromise<Response> {
    return this.api
      .get('/v1/me', {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      })
      .then(res => res);
  }
  /**
   * fetchArtistAlbums
   * @param artist string
   */
  public fetchArtistAlbums(artist: string): AxiosPromise<Response> {
    return this.api
      .get('/v1/search', {
        params: {
          q: artist,
          type: 'album',
        },
      })
      .then(res => res);
  }
  /**
   * saveAlbum to 'Your List'
   * @param id string
   */
  public saveAlbumToPlaylist(id: string): AxiosPromise<Response> {
    return this.api
      .get('/v1/me/albums', {
        params: {
          ids: id,
        },
      })
      .then(res => res);
  }

  /**
   * get saved Albums by user
   */
  public fetchAlbums(): AxiosPromise<Response> {
    return this.api.get('/v1/me/albums').then(res => res);
  }

  /**
   * get Currently playing track
   */
  public fetchCurrPlaying(): AxiosPromise<Request> {
    return this.api.get('/v1/me/player/currently-playing').then(res => res);
  }

  /**
   * Pause
   * Response 403 for non premium account
   */
  public pause(): AxiosPromise<Response> {
    return this.api.put('v1/me/player/pause').then(res => res);
  }
  /**
   * play
   * Response 403 for non premium account
   */
  public play(): AxiosPromise<Response> {
    return this.api.put('v1/me/player/play').then(res => res);
  }
  /**
   * SkipTrack
   *  Response 403 for non premium account
   */
  public skipTrack(): AxiosPromise<Response> {
    return this.api.get('v1/me/player/next').then(res => res);
  }

  /**
   * PreviousTrack
   * Response 403 for non premium account
   */
  public previousTrack(): AxiosPromise<Response> {
    return this.api.get('v1/me/player/previous').then(res => res);
  }
}

export default ApiService;
