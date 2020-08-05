import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
// component
import ProfileLogo from '../components/ProfileLogo';

const props = {
  source: 'https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36',
  alt: 'the weeknd cover',
};
storiesOf('ProfileLogo', module)
  .addDecorator(withKnobs)
  .add('Default', () => <ProfileLogo {...props} />);
