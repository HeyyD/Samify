import React from 'react';
import SongList from './SongList';
import './AlbumList.style.scss';

const AlbumList = () => {
  return(
    <div className='album'>
      <div className='albumHeader'>
        <img className='albumImage' src='http://www.amiright.com/album-covers/images/album-Rick-Springfield-Working-Class-Dog.jpg' />
        <h2>Albumi</h2>
      </div>
      <div className='albumList'>
        <SongList />
      </div>
    </div>
  );
};

export default AlbumList;
