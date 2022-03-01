import React from 'react';
import ChannelsField from './components/ChannelsField';
import Button from './containers/Button';
import TopNews from './containers/TopNews';
import './App.css';

const App = () => (
  <div data-test="component-app">
    <ChannelsField />
    <Button />
    <TopNews />
  </div>
)
export default App;
