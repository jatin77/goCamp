import React from 'react';
import neighbour from './Pexels Videos 2003678.mp4';
import ariel from './Aerial Shot Of Sunset.mp4';
import './Neighbourhood.css';
import img1 from './blue-branches-cable-car-1805561.jpg';
import img2 from './architecture-cliffside-cold-789380.jpg';
import splitbx1 from './buildings-clouds-dawn-2236386.jpg';
import splitbx2 from './benches-boat-bridge-890035.jpg';
import img3 from './architecture-buildings-europe-358589.jpg';
function Neighbourhood() {
  return (
    <div className='neighbour'>
      <div className='neighbour-landing'>
        <div className='neighbour-landing-video'>
          <video autoPlay loop muted>
            <source src={neighbour} />
          </video>
        </div>
        <div className='neighbour-landing-text'>
          <div className='text1'>
            <h1>CH.</h1>
            <h1>02</h1>
          </div>

          <div className='text3'>
            <h1>NEIGHBOUR-</h1>
          </div>
          <div className='text4'>
            <h1>HOOD</h1>
          </div>
        </div>
      </div>
      <div className='neighbourhood-intro'>
        <div className='neighbourhood-intro-header'>
          <p>Introduction by</p>
          <p>
            CANVAS LOHAN, <br />
            FOUNDER & CEO
          </p>
          <p>
            <i class='fas fa-quote-left' /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vel asperiores placeat dolorem
            aspernatur. Officiis eaque id in, distinctio reprehenderit labore
            rerum enim a sint optio pariatur, doloribus quia quos nisi. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            consectetur, quae hic, nisi mollitia voluptates minus cumque ipsa
            ratione iusto nihil delectus voluptatibus deserunt temporibus
            dolorum et sequi, repellat nobis. <i class='fas fa-quote-right' />
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            exercitationem soluta ipsa, similique ducimus dolor cum quidem. Quis
            ipsum qui maiores hic repudiandae corporis quidem repellendus,
            accusamus et nostrum rem! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Explicabo porro, ducimus iste mollitia alias
            inventore at voluptates quasi reprehenderit harum, sunt nobis nulla
            facilis quidem sapiente modi repellat odit. Laudantium?
          </p>
        </div>
      </div>
      <div className='quarter-box'>
        <div className='quarter-box-header'>
          <h1>MQ</h1>
          <div className='quarter-box-header-qoute'>
            <p>
              <b>MAKERS QUARTER</b>
            </p>
            <p>
              - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore a, cum consectetur itaque debitis voluptatum.
            </p>
          </div>
        </div>
        <div className='quarter-box-one'>
          <div className='img'>
            <img src={img2} alt='' />
          </div>
          <div className='img'>
            <img src={img1} alt='' />
          </div>
          <div className='quarter-box-one-text'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              dolor consequuntur quibusdam illo quas tempora vel quae, tempore
              facere.
            </p>
          </div>
          <div className='quarter-box-one-split'>
            <div />
            <div className='quarter-box-onesplit-bx2'>
              <img src={splitbx1} alt='' />
            </div>
          </div>
        </div>
        <div className='quarter-box-footer'>
          <h1>
            NEIGH <br />
            BOURS
          </h1>
          <div className='quarter-box-footer-qoute'>
            <p>
              <b>CREATIVE CORRIDOR</b>
            </p>
            <p>
              - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore a, cum consectetur itaque debitis voluptatum.
            </p>
          </div>
          <div className='quarter-box-footer-img1'>
            <img src={img3} alt='' />
          </div>
          <div className='quarter-box-footer-split'>
            <div className='quarter-box-footersplit-bx2'>
              <img src={splitbx2} alt='' />
            </div>
            <div />
          </div>
        </div>
      </div>
      <div className="ariel-video">
    <video className="ariel" autoPlay muted loop>
      <source src={ariel} type="video/mp4"/>
      
    </video>
    <div className="video-text">
        <h1>CH. 01</h1>
      </div>
    </div>
    </div>
  );
}

export default Neighbourhood;
