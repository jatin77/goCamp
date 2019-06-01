import React from 'react';
import camp from './Camping At A Forest.mp4';
import boat from './Boat Sailing The Sea.mp4';
import './building.css';
import entryOne from './coconut-trees-dawn-daylight-1033729.jpg';
import entryTwo from './ash-burn-calamity-1059042.jpg';
import entryThree from './blue-sky-camp-camping-2071563.jpg';
import entryFour from './activity-adult-adventure-1376960.jpg';
import entryFive from './adventure-backpack-backpacker-615471.jpg';
import entrySix from './activity-adventure-camp-1309584.jpg';
function Building() {
  return (
    <div className='building'>
      <div className='building-landing'>
        <div className='building-landing-video'>
          <video autoPlay loop muted>
            <source src={camp} />
          </video>
        </div>
        <div className='building-landing-text'>
          <div className='text1'>
            <h1>CH.</h1>
            <h1>01</h1>
          </div>
          <div className='text2'>
            <h1>THE</h1>
          </div>
          <div className='text3'>
            <h1>CAMP-</h1>
          </div>
          <div className='text4'>
            <h1>SITE</h1>
          </div>
        </div>
      </div>
      <div className='building-intro'>
        <div className='building-intro-header'>
          <p>Introduction by</p>
          <p>
            LARAVEL LINDSON, <br />
            FRONTEND ENGINEER
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
        </div>
      </div>
      <div className='about'>
        <div className='entry'>
          <div className='entry-header'>
            <div className='entry-header-total'>
              <h1>
                01 <span>-</span> <br />
                ENTRY <br />
                WAY
              </h1>
            </div>
            <div className='entry-header-sub'>
              <div className='entry-header-sub-head'>
                <p>IMAGES</p>
              </div>
              <div className='entry-header-sub-detail'>
                <p>(01 - 03)</p>
              </div>
            </div>
          </div>
          <div className='entry-images'>
            <div className='entry-imgBx'>
              <div className='entry-img'>
                <img src={entryOne} alt='' />
              </div>

              <div className='entry-text'>
                <p>01</p>
              </div>
            </div>
            <div className='entry-box-2'>
              <div className='entry-imgBx'>
                <div className='entry-img'>
                  <img src={entryTwo} alt='' />
                </div>

                <div className='entry-text'>
                  <p>02</p>
                </div>
              </div>
              <div className='entry-imgBx'>
                <div className='entry-img'>
                  <img src={entryThree} alt='' />
                </div>

                <div className='entry-text'>
                  <p>03</p>
                </div>
              </div>
            </div>
          </div>
          <div className='social'>
            <div className='entry-header'>
              <div className='entry-header-total'>
                <h1>
                  02 <span>-</span> <br />
                  SOCIALi <br />
                  ZATION
                </h1>
              </div>
              <div className='entry-header-sub'>
                <div className='entry-header-sub-head'>
                  <p>IMAGES</p>
                </div>
                <div className='entry-header-sub-detail'>
                  <p>(01 - 03)</p>
                </div>
              </div>
            </div>
            <div className='entry-images'>
              <div className='entry-imgBx'>
                <div className='entry-box-2'>
                  <div className='entry-imgBx'>
                    <div className='entry-img'>
                      <img src={entryFive} alt='' />
                    </div>

                    <div className='entry-text'>
                      <p>05</p>
                    </div>
                  </div>
                  <div className='entry-imgBx'>
                    <div className='entry-img'>
                      <img src={entrySix} alt='' />
                    </div>

                    <div className='entry-text'>
                      <p>06</p>
                    </div>
                  </div>
                </div>
                <div className='entry-img'>
                  <img src={entryFour} alt='' />
                </div>

                <div className='entry-text'>
                  <p>04</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-building-video">
        <video autoPlay loop muted>
          <source src={boat}/>
        </video>
        <div className="building-footer-video-text">
        <h1>CH. 02</h1>
      </div>
      </div>
    </div>
  );
}

export default Building;
