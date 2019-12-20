import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module)
  .add('Default', withInfo('Default button')(() => (
    <Button label="The Button" onClick={action('click')} />
  )));
