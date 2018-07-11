import React from 'react';
import { storiesOf } from '@storybook/react';
import CounterButton from './CounterButton';

storiesOf('CounterButton', module)
  .add('Counter', () => (
    <CounterButton />
  ));
