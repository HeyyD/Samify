const testState = [
  {
    id: 0,
    name: 'Loki',
    albums: ['lauluja koirasta', 'Ei vittu, jänis'],
  },
  {
    id: 0,
    name: 'MC Loki',
    albums: ['Ganksta\'s paradise', 'F*ckin bicycles!']
  }
];

const reducer = (state = testState, action) => {
  switch(action.type){
  default:
    return state;
  }
};


export default reducer;
