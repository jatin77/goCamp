import React from 'react';
import skate from './Time Lapse Video Of Night Sky.mp4';
import snow from './Video Of Snowfall.mp4';
import './intro.css';
function Intro() {
  return (
    <div>
    <div className='intro'>
      <div className='intro-video'>
        <video autoPlay muted loop>
          <source src={skate} type='video/mp4' />
        </video>
        <div className="intro-video-text">
          <div className="text">
            <p>INTRO</p>
          </div>
          <div className="text">
            <p>00:01:11</p>
          </div>
        </div>
      </div>
      <div className='intro-content' >
        <h1>NEW <br/>BASIC HQ.<br/>SD_CA<br/>32.7134&#176N;<br/>117.1497&#176;W</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br/> <br/>  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', <br/><br/> making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover <br/> <br/> many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
    </div>
<div className="snow-video">
    <video className="snow" autoPlay muted loop>
      <source src={snow} type="video/mp4"/>
      
    </video>
    <div className="video-text">
        <h1>CH. 01</h1>
      </div>
    </div>
    </div>
  );
}

export default Intro;
