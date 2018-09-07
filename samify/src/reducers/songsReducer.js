const testState = [
  {
    name: 'koiralaulu',
    artist: 'Loki',
    album: 'Lauluja koirasta',
    length: 120.00
  },
  {
    name: 'Give me food, bitch',
    artist: 'MC Loki',
    album: 'Ganksta\'s paradise',
    length: 180.00
  }
];
const reducer = (state = testState, action) => {
  switch(action.type){
  default:
    return state;
  }
};


export default reducer;
