import React, { useState } from 'react';
import VideoPlayer from 'react-video-js-player';
import './video.css';
import InfiniteScroll from 'react-infinite-scroller';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import LockOpen from "@material-ui/icons/LockOpen";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import vid from './media/video-1.mp4';
import pic from './media/pic-1.jpg';

import './video.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const VideoJ = () => {
    
    const classes = useStyles();
    const [state, setState] = useState({
        left:false,
        right:false, 
        top:false,
        bottom:false,
    })
    const video = vid;
    const poster = pic;
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };
      
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem button key={'Home'}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem button key={'About'}>
                <ListItemIcon><AboutIcon/></ListItemIcon>
                <ListItemText primary={'About'} />
            </ListItem>
            <ListItem button key={'Contacts'}>
                <ListItemIcon><ContactsIcon/></ListItemIcon>
                <ListItemText primary={'Contacts'} />
            </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button key={'Login'}>
                <ListItemIcon><LockOpen/></ListItemIcon>
                <ListItemText primary={'Login'} />
              </ListItem>
          </List>
        </div>
        );
    return (
        <div className="App">
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer('left', true)}>
                    <MenuIcon style={{color:'white'}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
            <h1 className='title'>Video Player</h1>
            <VideoPlayer
                src={video}
                poster={poster}
                playbackRates={[0.5, 0.85, 1.00, 1.25]}
            />

        <InfiniteScroll
             pageStart={0}
             //loadMore={loadFunc}
             hasMore={true || false}
             loader={<div className="loader" key={0}>Loading ...</div>}
         >
             {video}
         </InfiniteScroll>
           
        </div>


    );
    
  
};
export default VideoJ;   