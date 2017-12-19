const UPDATE_NAMES = "UPDATE_NAMES";

export function updateNames(payload) {
  return {
    type: UPDATE_NAMES,
    payload
  };
}

const intialState = {
  names: []
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case UPDATE_NAMES:
      const newNames = [...state.names, action.payload];
      return Object.assign({}, state, { names: newNames });
      break;

    default:
      return state;
      break;
  }
}
