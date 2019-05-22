const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if(action.type === 'searchFocues') {
    return {
      focused: true
    }
  }
  if(action.type === 'searchBlur') {
    return {
      focused: false
    }
  }
  return state;
}
