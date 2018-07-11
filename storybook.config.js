import React from 'react';
import { configure, addDecorator } from '@storybook/react';

const req = require.context('./src/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
    {story()}
  </div>
))

configure(loadStories, module);
