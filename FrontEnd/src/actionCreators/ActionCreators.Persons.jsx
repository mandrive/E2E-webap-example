import * as ACTIONS from './Actions';
import { ApiClient } from './../api/ApiClient';

export const fetchAllPersonsInProgress = () => {
  return {
    type: ACTIONS.PERSONS.FETCH_PERSONS_IN_PROGRESS
  }
}

export const fetchingPersonsSucceded = (persons) => {
  return {
    type: ACTIONS.PERSONS.FETCH_PERSONS_SUCCESS,
    persons: persons
  }
}

export const fetchingPersonsFailed = (exception) => {
  return {
    type: ACTIONS.PERSONS.FETCH_PERSONS_FAILED,
    exception: exception
  }
}

export const fetchAllPersons = () => {
    return (dispatch) => {
        dispatch(fetchAllPersonsInProgress());

        let apiClient = new ApiClient('http://localhost:4000/persons');
        apiClient.fetchPersons().then((persons) => {
            dispatch(fetchingPersonsSucceded(persons));
        }).catch((ex) => {
            dispatch(fetchingPersonsFailed(ex));
        });
    };
};
