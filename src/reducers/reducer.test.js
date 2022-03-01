import reducer from './index.js';
import React from 'react';
import { shallow } from 'enzyme';

const SELECT_CHANNEL = "SELECT_CHANNEL";
const REQUEST_POSTS = "REQUEST_POSTS";
const RECEIVE_POSTS = "RECEIVE_POSTS";

describe('rootReducer', () => {

    it('Should return default state', () => {
        const newState = reducer(undefined, {});
        expect(newState).toEqual({});
    });

    it('Should return new state if receiving type is SELECT_CHANNEL', () => {
        const chnlName = 'Aaj Tak';
        const newState = reducer(undefined, {
            type: SELECT_CHANNEL,
            payload: chnlName
        });
        expect(newState.channelName).toEqual(chnlName);
    });

    it('Should return new state if receiving type is REQUEST_POSTS', () => {
        const newState = reducer(undefined, {
            type: REQUEST_POSTS,
        });
        expect(newState.loading).toBeTruthy();
    });

    it('Should return new state if receiving type is RECEIVE_POSTS', () => {
        const posts = [{ author: 'Aajtak', title: 'Test 1' },
        { author: 'ABP News', title: 'Test 2' },
        { author: 'R.Bharat', title: 'Test 3' }];
        const newState = reducer(undefined, {
            type: RECEIVE_POSTS,
            payload: posts
        });
        expect(newState.data).toEqual(posts);
        expect(newState.loading).toBeFalsy();
    });

});