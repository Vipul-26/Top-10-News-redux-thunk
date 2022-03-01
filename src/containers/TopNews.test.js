import React from 'react';
import TopNews from './TopNews.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index.js';
import { shallow, mount } from 'enzyme';

const store = createStore(reducer);

const setup = () => {
  const wrapper = mount(<Provider store={store}>
   <TopNews /></Provider>);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('render TopNews', () => {
    const wrapper = setup();
    const topNewsComponent = findByTestAttr(wrapper, "component-topnews");
    expect(topNewsComponent.length).toBe(1);
});


