import React from 'react';
import SongList from './SongList';
import './ArtistPage.style.scss';

const ArtistPage = () => {
  return(
    <div className='artistWrapper'>
      <img src='http://www.amiright.com/album-covers/images/album-Rick-Springfield-Working-Class-Dog.jpg' />
      <div className='popular'>
        <h2>Loki</h2>
        <SongList />
      </div>
    </div>
  );
};

export default ArtistPage;
