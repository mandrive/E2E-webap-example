import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk'
import * as ACTIONCREATORS from  './../actionCreators/ActionCreators';
import * as ACTIONS from './../actionCreators/Actions';
import { ApiClient } from './../api/ApiClient';

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

describe('API Client', () => {

  let serverAddress = 'http://testserver/';

  afterEach(() => {
      nock.cleanAll()
  });

  it('should resolve promise if call to server made succesfully', () => {
    nock(serverAddress)
      .get('/persons')
      .reply(200, { body: [{id: '1', forename: 'test_forename', surname: 'test_surname', dateOfBirth: '01-01-1970'}] });

    let apiClient = new ApiClient(serverAddress);

    return apiClient.fetchPersons().then((persons) => {
      expect(persons.length).toEqual(1);
    });
  });

  it('should reject promise if call to server failed', () => {
    nock(serverAddress)
      .get('/persons')
      .reply(404);

    let apiClient = new ApiClient(serverAddress);

    return apiClient.fetchPersons().catch((ex) => {
        expect(ex).toExist();
    });
  });
});
