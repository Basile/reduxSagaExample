import * as actionTypes from './actionTypes';

const initialState = {
  entities: [{
    id: 1000,
    title: 'Initial Entity 1000',
  }, {
    id: 1001,
    title: 'Initial Entity 1001',
  }],
  error: '',
  congrats: false,
  allButtonsClicked: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ENTITY_GET_SUCCESS:
      return Object.assign({}, state, {
        entities: [...state.entities, action.entity]
      });
    case actionTypes.ENTITY_GET_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    case actionTypes.ENTITY_REMOVE:
      return Object.assign({}, state, {
        entities: state.entities.filter(entity => entity.id !== action.id)
      });
    case actionTypes.ENTITY_CONGRATS:
      return Object.assign({}, state, {
        congrats: true
      });
    case actionTypes.BUTTONS_CLICK:
      return Object.assign({}, state, {
        allButtonsClicked: true
      });
    default:
      return state;
  }
};
