const testState = [
  {
    id: 0,
    name: 'koiralaulu',
    artist: 'Loki',
    album: 'Lauluja koirasta',
    duration: 120.00
  },
  {
    id: 1,
    name: 'Give me food, bitch',
    artist: 'MC Loki',
    album: 'Ganksta\'s paradise',
    duration: 180.00
  }
];
const reducer = (state = testState, action) => {
  switch(action.type){
  default:
    return state;
  }
};


export default reducer;
