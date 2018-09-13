import React from 'react';
import SongList from './SongList';
import { Line } from 'rc-progress';
import './ArtistPage.style.scss';

const ArtistPage = () => {
  return(
    <div>
      <div className='artistWrapper'>
        <img src='http://www.amiright.com/album-covers/images/album-Rick-Springfield-Working-Class-Dog.jpg' />
        <div className='popular'>
          <h2>Loki</h2>
          <SongList />
        </div>
      </div>
      <div className='donationBar'>
        <Line
          percent="10"
          strokeWidth="10"
          trailWidth="10"
          strokeColor="#2BC252"
          trailColor="#928f8f" />
      </div>
    </div>
  );
};

export default ArtistPage;
