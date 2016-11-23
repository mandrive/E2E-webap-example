import * as ACTIONS from './Actions';
import { ApiClient } from './../api/ApiClient';

export const fetchAllPersons = () => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.PERSONS.FETCH_PERSONS_IN_PROGRESS
        });

        let apiClient = new ApiClient('http://localhost:4000/persons');
        apiClient.fetchPersons().then((persons) => {
            dispatch({
                type: ACTIONS.PERSONS.FETCH_PERSONS_SUCCESS,
                persons: persons
            });
        }).catch((ex) => {
            dispatch({
                type: ACTIONS.PERSONS.FETCH_PERSONS_FAILED,
                exception: ex
            });
        });
    };
};
