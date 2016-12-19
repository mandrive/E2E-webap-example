import nock from 'nock';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware, ActionsObservable } from 'redux-observable';
import './../html/config/__env';
import './../api/CustomStorage';
import { fetchAllPostsEpic } from './../api/Posts.epic';
import * as ACTIONS from './../actionCreators/Actions';
import * as Rx from 'rxjs';
var sinon = require('sinon');
const { TestScheduler } = Rx;

const epicMiddleware = createEpicMiddleware(fetchAllPostsEpic);
const mockStore = configureMockStore([epicMiddleware]);
const expectEpic = (epic, { expected, action, response, callArgs, store }) => {
  const testScheduler = new TestScheduler((actual, expected) => {
    console.log(actual, expected);
    expect(actual).to.deep.equal(expected);
  });
  
  const action$ = new ActionsObservable(
    testScheduler.createHotObservable(...action)
  );
  const responseSubs = '^!';
  const response$ = testScheduler.createColdObservable(...response);
  const call = sinon.stub().returns(response$);

  const test$ = epic(action$, store, call);
  testScheduler.expectObservable(test$).toBe(...expected);
  testScheduler.flush();
  
  expect(call.calledOnce).to.be.true;
  expect(call.calledWithExactly(...callArgs)).to.be.true;

  testScheduler.expectSubscriptions(response$.subscriptions).toBe(responseSubs);
};

describe('postsEpic', () => {
    let store;
    let testScheduler;

  beforeEach(() => {
    store = mockStore();
    testScheduler = new TestScheduler((expected, actual) => {
      expect(expected).toEqual(actual);
    });
  });

  afterEach(() => {
    nock.cleanAll();
    epicMiddleware.replaceEpic(fetchAllPostsEpic);
  });

  it('Fetches all posts from storage', async () => {
        const payload = [];
        store.dispatch({ type: ACTIONS.POSTS.FETCH_POSTS});
        expectEpic(fetchAllPostsEpic, {
            expected: ['-a|', {
                a: { type: ACTIONS.POSTS.FETCH_POSTS_SUCCEDED, payload: { posts: []} }
            }],
            action: ['(a|)', {
                a: { type: ACTIONS.POSTS.FETCH_POSTS }
            }],
            response: ['-a|', {
                a: {posts: []}
            }]
    });
  })
})