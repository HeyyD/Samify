import React from 'react';
import SongList from './SongList';
import { Line } from 'rc-progress';
import './ArtistPage.style.scss';

const ArtistPage = () => {
  return(
    <div>
      <div className='artistTop'>
        <img src='http://www.amiright.com/album-covers/images/album-Rick-Springfield-Working-Class-Dog.jpg' />
        <div className='popular'>
          <h2>Loki</h2>
          <SongList />
        </div>
      </div>
      <div className='artistBot'>
        <div className='donationSection'>
          <Line
            percent="10"
            strokeWidth="10"
            trailWidth="10"
            strokeColor="#2BC252"
            trailColor="#928f8f" />
          <div> Hello asdf asdf asdf asdf asdf asdf asdf asdf asdfas asdf </div>
        </div>
        <div className='albums'>
          <div className='album'>
            <div className='albumHeader'>
              <img className='albumImage' src='http://www.amiright.com/album-covers/images/album-Rick-Springfield-Working-Class-Dog.jpg' />
              <h2>Albumi</h2>
            </div>
            <div className='albumList'>
              <SongList />
            </div>
          </div>
          <div className='album'>
            <div className='albumHeader'>
              <img className='albumImage' src='http://www.amiright.com/album-covers/images/album-Rick-Springfield-Working-Class-Dog.jpg' />
              <h2>Albumi</h2>
            </div>
            <div className='albumList'>
              <SongList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
