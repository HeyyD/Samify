import React from 'react';
import { connect } from 'react-redux';
import Song from './Song';

const SongList = ({ songs }) => {
  console.log(songs);
  const listStyle = {
    width: '100%'
  };
  return(
    <div style={listStyle}>
      {songs.map( s => <Song key={'song'+s.id}song={s} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)( SongList );
