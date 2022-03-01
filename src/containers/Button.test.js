import React from 'react';
import Button from './Button.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index.js';
import { shallow, mount } from 'enzyme';

const store = createStore(reducer);

const setup = () => {
  const wrapper = mount(<Provider store={store}>
    <Button /></Provider>);
  return wrapper;
}

test('render Button', () => {
  const wrapper = setup();
  const buttonComponent = wrapper.find('button');
  expect(buttonComponent.length).toBe(1);
  expect(buttonComponent.text()).toBe('Top Ten News');
});

