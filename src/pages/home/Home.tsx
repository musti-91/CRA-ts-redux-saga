import React, { memo, useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
// types
import { IStore } from 'types/store/store.types';
// actions
import { saveAlbumStart } from 'store/saveAlbum/save.actions';
import { fetchSearchResultStart } from 'store/search/search.actions';
import { fetchAlbumsStart } from 'store/albums/albums.actions';
import { fetchCurrPlayingActionStart } from 'store/currentlyPlaying/currentlyPlaying.actions';
import { playTrackStart } from 'store/playTrack/playTrack.actions';

// components
import Search from 'components/Search';
import Navigation from 'components/Navigation';
import Loading from 'components/Loading';
import Grid from 'components/Grid';
import FavouriteList from 'components/FavouriteList';
import Player from 'components/Player';
import { Section, SearchWrapper, Columns } from './Home.style';

interface IProps {
  // actions
  // ts should pass an argument error
  fetchSearchResultStart: any;
  saveAlbumStart: any;
  fetchAlbumsStart: any;
  fetchCurrPlayingActionStart: any;
  playTrackStart: any;
  // state
  albums: any;
  artistAlbums: any;
  loading: boolean;
  error: any;
  currentlyPlaying: any;
}
/**
 * Home
 * @param props
 */
const Home: React.FC<IProps> = ({
  fetchSearchResultStart,
  fetchAlbumsStart,
  saveAlbumStart,
  fetchCurrPlayingActionStart,
  playTrackStart,
  currentlyPlaying,
  albums,
  loading,
  artistAlbums,
  error,
}) => {
  /**
   * useEffect
   */
  useEffect(() => {
    fetchAlbumsStart();
    fetchCurrPlayingActionStart();
  }, [fetchAlbumsStart, fetchCurrPlayingActionStart]);
  /**
   *
   * @param albumId string
   */
  const onAlbumAdd = (albumId: string) => {
    if (albumId.trim() !== '') {
      saveAlbumStart(albumId);
    }
  };
  /**
   *
   * @param artist string
   */
  const onSubmit = (artist: string) => {
    if (artist.trim() !== '') {
      fetchSearchResultStart(artist);
    } else {
      return;
    }
  };
  /**
   * Play current track on click
   */
  const onPlayTrack = () => {
    // @ts-ignore
    playTrackStart();
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="The home page" />
      </Helmet>
      <Navigation />
      <Section>
        <Search onSubmit={onSubmit} onClick={() => {}} label={'Search'} />
        <SearchWrapper>
          {loading && <Loading />}
          {!loading && artistAlbums ? (
            <>
              <h2>Results:{artistAlbums.albums.total}</h2>
              <Grid
                data={artistAlbums.albums.items}
                // added: to have the heart red or gray
                added={true}
                onAlbumAdd={onAlbumAdd}
              />
            </>
          ) : (
            <>
              <h2>Results: 0</h2>
              <h4>no items</h4>
            </>
          )}
        </SearchWrapper>
        <Columns>
          <div style={{ width: '48%' }}>
            <h3>Currently playing</h3>
            <p>No item is playing</p>
            {currentlyPlaying.loading && <p>No item is playing</p>}
            {currentlyPlaying.data && (
              <Player
                data={currentlyPlaying.data}
                onPrevious={() => console.log('onPrevious')}
                onSkip={() => console.log('next')}
                onPause={() => console.log('Pause')}
                onPlay={onPlayTrack}
              />
            )}
          </div>
          {albums.loading && <Loading />}
          {!albums.loading && albums.data && <FavouriteList data={albums.data.items} />}
        </Columns>
      </Section>
    </>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    artistAlbums: state.search.data,
    loading: state.search.loading,
    error: state.search.error,
    albums: state.albums,
    currentlyPlaying: state.currentlyPlaying,
  };
};
const mapDispatchToProps = {
  fetchSearchResultStart,
  saveAlbumStart,
  fetchAlbumsStart,
  fetchCurrPlayingActionStart,
  playTrackStart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(Home));
