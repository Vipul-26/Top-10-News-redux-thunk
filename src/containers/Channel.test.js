import React from 'react';
import Channel from './Channel.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index.js';
import { shallow, mount } from 'enzyme';

const store = createStore(reducer);

const setup = () => {
  const wrapper = mount(<Provider store={store}>
   <Channel /></Provider>);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('render Channel', () => {
    const wrapper = setup();
    const channelComponent = findByTestAttr(wrapper, "component-channel");
    expect(channelComponent.length).toBe(1);
});

test('render p', () => {
    const wrapper = setup();
    const p = wrapper.find('p');
    expect(p.length).toBe(1);
});
