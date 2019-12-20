Codemod for Storybook Info Addon
================================

A codemod that replaces Storybook Info Addon's deprecated `withInfo()` decorator with `info` parameter.

```javascript
// before
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module)
  .add('Default', withInfo('Default button')(() => (
    <Button label="The Button" onClick={action('click')} />
  )));
```

```javascript
// after
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
```

NOTE: It doesn't replace `addWithInfo` API with `withInfo`.
You can use the official codemod here: https://github.com/storybookjs/storybook/tree/next/lib/codemod

## Usage

```zsh
$ npm install
$ npx jscodeshift -t transformer.js <path to your stories>
```
