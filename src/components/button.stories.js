import React from 'react';
import base from 'paths.macro';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)

storiesOf(`Other|${base}/Dirname Example`, module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));

storiesOf('Com|Buttons|Emoji', module).add('with some emoji', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
    </span>
  </Button>
));