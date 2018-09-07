import React from 'react';
import { connect } from 'react-redux';
import Song from './Song';

const SongList = ({ songs }) => {
  console.log(songs);
  return(
    <ul>
      {songs.map( s => <Song key={'song'+s.id}song={s} />)}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)( SongList );
