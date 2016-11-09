import * as ACTIONS from './Actions';

export const fetchAllPersons = () => {
  return (dispatch) => {
    console.log("I'm dispatching!");
    dispatch({
        type: ACTIONS.PERSONS.FETCH_PERSONS_IN_PROGRESS
    });
    console.log('one action dispatched');
    //DO SMTH
    setTimeout(() => {}, 1000);

    console.log('timeout');

    dispatch({
        type: ACTIONS.PERSONS.FETCH_PERSONS_SUCCESS,
        persons: [{name: 'test'}]
    });
    console.log('second action dispatched');
  }
}
