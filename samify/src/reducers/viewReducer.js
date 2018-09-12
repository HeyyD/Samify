const reducer = (state = 'main', action) => {
  switch(action.type){
  case 'SWITCHVIEW':
    return action.view;
  default:
    return state;
  }
};

export const switchView = (view) => {
  return async (dispatch) => {
    dispatch({
      type: 'SWITCHVIEW',
      view
    });
  };
};

export default reducer;
