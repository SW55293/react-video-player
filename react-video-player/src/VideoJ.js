import React, { useState } from 'react';
import VideoPlayer from 'react-video-js-player';
import './video.css';
import vid from './media/video-1.mp4';
import pic from './media/pic-1.jpg';
import './video.css';
import { useMachine } from "@xstate/react";
import { Machine, assign } from "xstate";

const videoPlayer = new Machine({
  id: 'videoPlayer',
  initial: 'loading',
  context: {
    video: null,
    duration: 0,
    elapsed: 0
  },
  states: {
    loading: {
      on: {
        LOADED: "ready",
        FAIL: "failure"
      }
    },

    ready: {
      initial: "paused",
      states: {
        paused: {
          on: {
            PLAY: "playing"
          }
        },
        playing: {
          on: {
            PAUSE: "paused",
            END: "ended",
            TIMING: "playing"
          }
        },
        ended: {
          on: {
            PLAY: "playing"
          }
        }
      }
    },
    failure: { type: 'final' }
  }
});

const VideoJ = () => {
  const video = vid;
  const poster = pic;

    return (
      <div className="App">


        <h1 className='title'></h1>
        <VideoPlayer
          src={video}
          poster={poster}
          playbackRates={[0.5, 0.85, 1.00, 1.25]}
        />
      </div>


    );

    }
  
  export default VideoJ;   