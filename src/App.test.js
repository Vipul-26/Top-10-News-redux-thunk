import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index.js';
import { mount } from 'enzyme';

const store = createStore(reducer);

const setup = () => {
  const wrapper = mount(<Provider store={store}>
    <App /></Provider>);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('render app', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

