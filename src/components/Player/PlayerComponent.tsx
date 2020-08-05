import React, { FC, memo } from 'react';
import { Wrap, Logo, TitleWrapper, Controls } from './PlayerComponent.style';

import { ReactComponent as Pause } from 'assets/svg/pause_button.svg';
import { ReactComponent as Play } from 'assets/svg/play_button.svg';
import { ReactComponent as Skip } from 'assets/svg/skip_button.svg';

interface Props {
  data: any;
  onPlay: () => void;
  onPause: () => void;
  onSkip: () => void;
  onPrevious: () => void;
}

/**
 * @author
 * @function PlayerComponent
 **/

const PlayerComponent: FC<Props> = ({ data, onPrevious, onSkip, onPause, onPlay }) => {
  const isDisableColor = (isAllows: boolean) => (isAllows ? '#fff' : 'grey');

  const { url: albumCover } = data && data.item.album.images[1];
  // needs to another api call for artist cover image
  const { url: artistCover } = data && data.item.album.images[2];

  const defaultStyle = {
    fill: '#fff',
    width: '50px',
    height: '50px',
  };

  const onPrevTrack = (e: any) => {
    if (!data.actions.disallows.skippingPrev) {
      return;
    } else {
      onPrevious();
    }
  };

  return (
    <Wrap image={albumCover}>
      <Logo image={artistCover} />
      <TitleWrapper>
        <div>
          <h4 style={{ color: '#fff' }}>{data.item.name}</h4>
          <p style={{ color: '#ffd' }}>{data.item.album.artists[0].name}</p>
        </div>
        <Controls>
          <Skip
            onClick={onPrevTrack}
            style={{
              ...defaultStyle,
              fill: isDisableColor(data.actions.disallows.skippingPrev),
              transform: 'rotate(180deg)',
            }}
          />
          {data.isPlaying ? (
            <Pause style={defaultStyle} onClick={onPause} />
          ) : (
            <Play style={defaultStyle} onClick={onPlay} />
          )}
          <Skip onClick={onSkip} style={defaultStyle} />
        </Controls>
      </TitleWrapper>
    </Wrap>
  );
};

export default memo(PlayerComponent);
