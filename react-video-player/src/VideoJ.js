import React from 'react';
import VideoPlayer from 'react-video-js-player';
import vid from './media/video-1.mp4';
import pic from './media/pic-1.jpg';
import './video.css';


const VideoJ = () => {

    const video = vid;
    const poster = pic;
   return (
      <div className= "App">
          <h1>React Video Player</h1>
          <VideoPlayer
              src={video}
              poster={poster}
              width="720"
              height="420"
              playbackRates= {[0.5, 0.85, 1.00, 1.25]}
              />
      </div>

   );
    

};
export default VideoJ;