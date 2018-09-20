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
  },
  {
    id: 2,
    name: 'koiralaulu',
    artist: 'Loki',
    album: 'Lauluja koirasta',
    duration: 120.00
  },
  {
    id: 3,
    name: 'Under the bed',
    artist: 'Walt Loki',
    album: 'Walt Loki\'s classics',
    duration: 190.00
  },
  {
    id: 4,
    name: 'KEBAB',
    artist: 'Slim Loki x Fatboy L',
    album: 'Poo disaster',
    duration: 220.00
  },
  {
    id: 5,
    name: 'Mennään jo',
    artist: 'Lenkkidoge',
    album: 'Mennään.. pls.. mennään!',
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
