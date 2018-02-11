
const initialState = {
  calledSample: false
}

const sampleReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  if (action.type === 'DEMONSTRATE_ACTION') {
    console.log('demonstrating');
    newState.calledSample = true;
    return newState;
  }

  return state;
}

export default sampleReducer;