import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import './video.css';
import pic from './media/pic-1.jpg';
import pics from './media/pic-2.jpg';
import picss from './media/pic-3.jpg';



const MCarousel = () => (
      <Carousel style={{ background: '#2E3B55'}}>
        <div className="car">
        <img src={pic} alt="my"/>
        <img src={pics} alt="my hat"/>
        <img src={picss} alt="my what"/>
        <img src={pic} alt="my"/>
        <img src={pics} alt="my hat"/>
        
        
        </div>
      </Carousel>
    );
    export default MCarousel;