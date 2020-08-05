import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

const props = {
  label: text('change me', 'my button'),
  onClick: () => action('clicked'),
};
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Button {...props} />);
