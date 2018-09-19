import React from 'react';
import SongList from './SongList';
import AlbumList from './AlbumList';
import ArtistDonation from './ArtistDonation';
import { connect } from 'react-redux';
import './ArtistPage.style.scss';

const ArtistPage = ({ artist }) => {
  return(
    <div>
      <div className='artistTop'>
        <img src='http://www.amiright.com/album-covers/images/album-Rick-Springfield-Working-Class-Dog.jpg' />
        <div className='popular'>
          <h2>{artist.name}</h2>
          <SongList />
        </div>
      </div>
      <div className='artistBot'>
        <ArtistDonation artist={artist}/>
        <div className='albums'>
          {artist.albums.map((album, i) => {
            return <AlbumList key={album+i} album={album}/>;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    artist: state.artists.find(a => a.id.toString() === props.id)
  };
};

export default connect(mapStateToProps)( ArtistPage );
