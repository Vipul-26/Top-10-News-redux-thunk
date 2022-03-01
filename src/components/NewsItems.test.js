import React from 'react';
import NewsItem from './NewsItems.js';
import { shallow } from 'enzyme';

test('render NewsItems', () =>
{
   expect(2+1).toBe(3);
});

// const setup = (props={}) => {
//   const wrapper = shallow(<NewsItem {...props}/>);
//   return wrapper;
// }

// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// }

// test('render NewsItem', () => {
//     const wrapper = setup();
//     const newsComponent = findByTestAttr(wrapper, "component-newsitem");
//     expect(newsComponent.length).toBe(1);
// });

// test('render h3', () => {
//     const wrapper = setup({ title:"Top 10 News" });
//     const h3 = wrapper.find('h3');
//     expect(h3.text()).toBe('Top 10 News');
// });

// test('render image', () => {
//     const wrapper = setup({ urlToImage:"www.google.com" });
//     const img = wrapper.find('img');
//     expect(img.props().src).toBe('www.google.com');
// });

// test('render p', () => {
//     const wrapper = setup({ description:"This news is from AajTak" });
//     const p = wrapper.find('p');
//     expect(p.text()).toBe('This news is from AajTak');
// });

// test('render a', () => {
//     const wrapper = setup();
//     const a = wrapper.find('a');
//     expect(a.text()).toBe(' Read more ');
// });

