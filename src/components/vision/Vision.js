import React from 'react';
import visionVid from './Pexels Videos 2916.mp4';
import visionFooterVid from './Blurry Video Of People Working.mp4';
import './vision.css';
import introImg from './adult-chill-connection-450271.jpg';
function Vision() {
  return (
    <div className='vision'>
      <div className='vision-landing'>
        <div className='vision-landing-video'>
          <video autoPlay loop muted>
            <source src={visionVid} />
          </video>
        </div>
        <div className='vision-landing-text'>
          <div className='text1'>
            <h1>CH.</h1>
            <h1>03</h1>
          </div>
          <div className='text2'>
            <h1>OUR</h1>
          </div>

          <div className='text3'>
            <h1>VISION</h1>
          </div>
        </div>
      </div>
      <div className='vision-intro'>
        <div className='vision-intro-header'>
          <p>Introduction by</p>
          <p>
            SCRIPT REACT, <br />
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
          <div className='vision-intro-img'>
            <img src={introImg} alt='' />
          </div>
        </div>
      </div>
      <div className='vision-about'>
        <div className='vision-about-header'>
          <h1>WHAT'S NEXT</h1>
          <h1>
            -A letter from Matt Faulk, <br /> CEO
          </h1>
        </div>
        <div className='vision-about-para'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            iusto, sunt tempore quam laborum dicta recusandae voluptatum
            facilis. Doloremque eius laudantium eligendi quas iste porro fuga
            sit autem rem explicabo! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Repellendus, voluptas.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            recusandae modi, non sunt ipsa error impedit odio sit eos, molestias
            ullam dolores fugit voluptatem laboriosam reprehenderit cupiditate
            dolorum, magni perspiciatis consequuntur dolore! Ipsum esse minus,
            reprehenderit, alias rem quidem molestiae soluta inventore autem
            error fuga, consectetur quo optio nesciunt asperiores! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ipsam, saepe.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            recusandae modi, non sunt ipsa error impedit odio sit eos, molestias
            ullam dolores fugit voluptatem laboriosam reprehenderit, alias rem
            quidem molestiae soluta inventore autem error fuga, consectetur quo
            optio nesciunt asperiores! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsam, saepe.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            recusandae modi, non sunt ipsa error error fuga, consectetur quo
            optio nesciunt asperiores! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsam, saepe.
          </p>
          <h1 className="vision-about-header-logo">
            <h2>acid</h2>
          </h1>
        </div>
      </div>
      <div className="footer-vision-video">
        <video autoPlay loop muted>
          <source src={visionFooterVid}/>
        </video>
        <div className="vision-footer-video-text">
        <h1>CH. 04</h1>
        </div>
      </div>
    </div>
    
  );
}

export default Vision;
