import React from 'react';
import pursuitVid from './Video Footage Of People Climbing A Mountain.mp4';
import './pursuit.css';
import img1 from './adventure-earphones-earth-1079034.jpg';
import img2 from './advertising-bank-brochure-623046.jpg';
import img3 from './bank-notes-banknotes-cash-164560.jpg';
function Pursuit() {
  return (
    <div className='pursuit'>
      <div className='pursuit-landing'>
        <div className='pursuit-landing-video'>
          <video autoPlay loop muted>
            <source src={pursuitVid} />
          </video>
        </div>
        <div className='pursuit-landing-text'>
          <div className='text1'>
            <h1>CH.</h1>
            <h1>04</h1>
          </div>
          <div className='text2'>
            <h1>THE</h1>
          </div>

          <div className='text3'>
            <h1>PURSUIT</h1>
          </div>
        </div>
      </div>
      <div className='pursuit-intro'>
        <div className='pursuit-intro-header'>
          <p>Introduction by</p>
          <p>
            I/O MANAGER, <br />
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
            accusamus et nostrum rem! <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            porro, ducimus iste mollitia alias inventore at voluptates quasi
            reprehenderit harum, sunt nobis nulla facilis quidem sapiente modi
            repellat odit. Laudantium?
          </p>
          <div className='pursuit-intro-img'>
            <img src={img1} alt='' />
          </div>
        </div>
      </div>
      <div className='pursuit-about'>
        <div className='pursuit-about-header'>
          <h1>01-</h1>
          <h1>MAGAZINE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className='pursuit-intro-img'>
          <img src={img2} alt='' />
        </div>
        <div className='pursuit-about-header'>
          <h1>02-</h1>
          <h1>FINANCE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className='pursuit-intro-img'>
          <img src={img3} alt='' />
        </div>
      </div>
      <div className='footer'>
        <div className='connect'>
          <ul>
            <li>
              <i class='fab fa-facebook-f' />
            </li>
            <li>
              <i class='fab fa-twitter' />
            </li>
            <li>
              <i class='fab fa-instagram' />
            </li>
            <li>
              <i class='fab fa-linkedin-in' />
            </li>
          </ul>
        </div>
        <div className='work'>
          <p>acidHeights@fmail.com</p>
          <p>(+91)-123-000</p>
        </div>
      
      </div>
      <div className='rights'>
          <p>
            <small>&copy;acid 2019</small>
          </p>
        </div>
    </div>
  );
}

export default Pursuit;
