import * as ACTIONS from './Actions';
import { ApiClient } from './../api/ApiClient';
import Rx from 'rxjs/Rx';

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

        /*let apiClient = new ApiClient('http://localhost:4000/persons');
        apiClient.fetchPersons().then((persons) => {
            dispatch(fetchingPersonsSucceded(persons));
        }).catch((ex) => {
            dispatch(fetchingPersonsFailed(ex));
        });*/
        let personsPromise = getPersons();
        let personsSource = new Rx.Observable.fromPromise(personsPromise).flatMap(Rx.Observable.from);
        personsSource.subscribe((x) => { console.log("onNext: " + x.id); }, (e) => { console.log("onError: " + e);}, () => { console.log("onCompleted");})
    };
};

const getPersons = () => {
    const persons = [
        {id: 1, forename: 'forename1', surname: 'surname1', dateOfBirth: '01-01-1970'},
        {id: 2, forename: 'forename2', surname: 'surname2', dateOfBirth: '01-01-1970'}
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => { return resolve(persons) }, 1000);
    })
}
