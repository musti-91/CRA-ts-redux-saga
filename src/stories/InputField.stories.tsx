import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//  component
import InputField from '../components/InputField';

const props = {
  onSubmit: () => action('submitted'),
};

storiesOf('InputField', module).add('Default', () => <InputField {...props} />);
