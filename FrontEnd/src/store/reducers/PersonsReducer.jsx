import * as ACTIONS from './../../actionCreators/Actions';

let initialState = {
  fetchingInProgress: true,
  persons: []
}

export const PersonsReducers = (state = initialState, action) => {
  if (action && action.type) {
    switch(action.type) {
      case ACTIONS.PERSONS.FETCH_PERSONS_IN_PROGRESS:
      console.log('hola!');
        return {
          ...state,
          fetchingInProgress: true
        }
      case ACTIONS.PERSONS.FETCH_PERSONS_SUCCESS:
        return {
          ...state,
          persons: action.persons,
          fetchingInProgress: false
        }
    }
  }

  return initialState;
}
