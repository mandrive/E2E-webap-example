import './../api/CustomStorage';
import './__env.tests';
import { fetchAllPostsEpic } from './../api/Posts.epic';
var mocha = require('mocha');
var sinon = require('sinon');
var Rx = require('rxjs');
const { Observable, Subject, TestScheduler } = Rx;
const { concat, of, from, ajax } = Rx.Observable;
const { ActionsObservable } = require('redux-observable');
const { expect } = require('chai');

/*const indirect = {
  call: (fn, ...args) => fn(...args)
};

const api = {
  fetchFoo: id => ajax.getJSON(`/api/foo/${id}`)
};

const fetchFooEpic = (action$, store, call = indirect.call) =>
  action$.ofType('FETCH_FOO')
    .mergeMap(action =>
      call(api.fetchFoo, action.payload.id)
        .takeUntil(action$.ofType('FETCH_FOO_CANCELLED'))
        .map(payload => ({ type: 'FETCH_FOO_FULFILLED', payload }))
        .catch(error => of({
          type: 'FETCH_FOO_REJECTED',
          payload: error.xhr.response,
          error: true
        }))
    );*/

const expectEpic = (epic, { expected, action, response, callArgs, store }) => {
  const testScheduler = new TestScheduler((actual, expected) => {
    //console.log(actual, expected);
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

  testScheduler.expectSubscriptions(response$.subscriptions).toBe(responseSubs);
};

describe('fetchFooEpic', () => {
  it('calls the correct API', () => {
    const response = [];

    expectEpic(fetchAllPostsEpic, {
      expected: ['-a|', {
        a: { type: 'FETCH_POSTS_SUCCEDED', posts: [] }
      }],
      action: ['(a|)', {
        a: { type: 'FETCH_POSTS' }
      }],
      response: ['-a|', {
        a: response
      }]
    });
  });

  it('handles errors correctly', () => {
    expectEpic(fetchAllPostsEpic, {
      expected: ['-(a|)', {
        a: { type: 'FETCH_POSTS_FAILED', error: true }
      }],
      action: ['(a|)', {
        a: { type: 'FETCH_POSTS' }
      }],
      response: ['-#'],
    });
  });

  it('handles cancellation correctly', () => {
    expectEpic(fetchAllPostsEpic, {
      expected: ['--|'],
      action: ['ab|', {
        a: { type: 'FETCH_POSTS' },
        b: { type: 'FETCH_POSTS_CANCEL' }
      }],
      response: ['-a|', {
        a: { message: 'SHOULD_NOT_EMIT_THIS' }
      }],
    });
  });
});
