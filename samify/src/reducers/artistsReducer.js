const testState = [
  {
    id: 0,
    name: 'Loki',
    albums: ['lauluja koirasta', 'Ei vittu, jänis'],
    goal: 10000,
    current: 5000
  },
  {
    id: 1,
    name: 'MC Loki',
    albums: ['Ganksta\'s paradise', 'F*ckin bicycles!'],
    goal: 10000,
    current: 1000
  }
];

const reducer = (state = testState, action) => {
  switch(action.type){
  case 'DONATE':{
    const oldArtists = state.filter(a => a.id !== action.id);
    const updated = state.find(a => a.id === action.id);
    return [...oldArtists, { ...updated, current: updated.current + action.ammount }];
  }
  default:
    return state;
  }
};

export const donate = (id, ammount) => {
  return async (dispatch) => {
    dispatch({
      type: 'DONATE',
      id: id,
      ammount: ammount
    });
  };
};


export default reducer;
