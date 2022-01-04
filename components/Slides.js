import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '/img/ContractPT1.jpg',
  '/img/ContractPT2.jpg',
  '/img/submit.png'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Contract Part 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Contract Part 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Submit function</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
