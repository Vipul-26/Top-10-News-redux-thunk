import React from 'react';
import ChannelsField from './ChannelsField.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index.js';
import { mount } from 'enzyme';

const store = createStore(reducer);

const setup = () => {
  const wrapper = mount(
    <Provider store={store}>
      <ChannelsField />
    </Provider>);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('render ChannelsField', () => {
  const wrapper = setup();
  const channelsfieldComponent = findByTestAttr(wrapper, "component-channelsfield");
  expect(channelsfieldComponent.length).toBe(1);
  const channelComponent = findByTestAttr(channelsfieldComponent, "component-channel");
  expect(channelComponent.length).toBe(6);
});

