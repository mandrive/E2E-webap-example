import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import thunk from 'redux-thunk'
import * as ACTIONCREATORS from  './../actionCreators/ActionCreators';
import * as ACTIONS from './../actionCreators/Actions';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('action creators', () => {
  it('cretes FETCH_PERSONS_IN_PROGRESS when fetching persons started', () => {
    const expectedActions = [
      { type: ACTIONS.PERSONS.FETCH_PERSONS_IN_PROGRESS }
    ]

    const store = mockStore({ persons: [] })

    store.dispatch(ACTIONCREATORS.PERSONS.fetchAllPersonsInProgress());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
