import React from 'react';
import { Line } from 'rc-progress';
import { connect } from 'react-redux';
import { donate } from '../reducers/artistsReducer';
import './ArtistDonation.style.scss';

const ArtistDonation = ({ artist, donate }) => {
  return (
    <div className='donationSection'>
      <Line
        percent={artist.current / artist.goal * 100}
        strokeWidth="10"
        trailWidth="10"
        strokeColor="#2BC252"
        trailColor="#928f8f" />
      <button className='donateBtn' onClick={() => donate(artist.id, 100)}>Donate €</button>
      <button className='subBtn'>Subscribe</button>
      <div className='infoBox'>
        <h3>Donate for a new single!</h3>
        <table>
          <tbody>
            <tr>
              <td>Goal: </td>
              <td>{artist.goal}</td>
            </tr>
            <tr>
              <td>Current: </td>
              <td>{artist.current}</td>
            </tr>
          </tbody>
        </table>
        <div className='donateText'>
        Bacon ipsum dolor amet fatback sirloin prosciutto, pastrami boudin
        short loin turducken t-bone. Ham rump frankfurter, ball tip beef ribs
        filet mignon short loin jowl sausage tongue corned beef. Shankle strip
        steak t-bone sirloin jowl fatback short ribs frankfurter cupim bacon meatball.
        </div>
        <div>
          <button className='learnMore'>Learn more..</button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { donate })( ArtistDonation );
