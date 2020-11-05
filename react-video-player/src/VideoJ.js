import React from 'react';
import VideoPlayer from 'react-video-js-player';
import vid from './media/video-1.mp4';
import pic from './media/pic-1.jpg';

const VideoJ = () => {

    const video = vid;
    const poster = pic;
   return (
      <div className= "App">
          <h1>Video Player</h1>
          <VideoPlayer
              src={video}
              poster={poster}
              width="720"
              height="420" />
      </div>

   );
    

};
export default VideoJ;