import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
//  component
import FavouriteList from '../components/FavouriteList';

const props = {
  data: [
    {
      id: 'uuid',
      album: {
        name: 'After Hours',
        artists: [{ uri: 'spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ', name: 'The Weeknd' }],
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
          },
        ],
      },
    },
  ],
};
storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('Default', () => <FavouriteList {...props} />);
