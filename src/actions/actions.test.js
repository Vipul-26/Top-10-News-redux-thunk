import moxios from 'moxios';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from '../reducers'
import { fetchPosts } from './index.js';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = [{
            title: 'Example title 1',
            description: 'Some Text 1'
        }, {
            title: 'Example title 2',
            description: 'Some Text 2'
        }, {
            title: 'Example title 3',
            description: 'Some Text 3'
        }];

        const store = createStore(
            reducer, applyMiddleware(thunk, logger)
        );
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts('bbc-news'))
            .then(() => {
                const newState = store.getState();
                expect(newState.data[0]).toBe(expectedState);
            })
    });
});