import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module)
  .add('Default', () => (
    <Button label="The Button" onClick={action('click')} />
  ), {
  info: 'Default button'
});

