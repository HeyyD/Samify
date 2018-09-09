import React from 'react';

const Song = ({ song }) => {
  const itemStyle = {
    display: 'flex',
    padding: '0.5em',
    borderBottom: '1px solid grey',
  };
  return(
    <div style={itemStyle}>
      <div style={{ flex: '1' }}>
        {song.name}
      </div>
      <div style={{ flex: '1' }}>
        {song.album}
      </div>
      <div style={{ flex: '1' }}>
        {song.artist}
      </div>
      <div style={{ flex: '3' }}>
        {song.duration }
      </div>
    </div>
  );
};

export default Song;
