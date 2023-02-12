import { Avatar, Button, CircularProgress, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid/Grid';
import React, { useEffect } from 'react';
import Tweet from './Tweet';
import { styled } from '@mui/material/styles';
import Header from './Header';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../store/ducks/tweets/actionCreators';
import { selectTweetsIsLoading, selectTweetsItems } from '../store/ducks/tweets/selectors';




const Content: React.FC = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectTweetsIsLoading)

  useEffect(() => {
    dispatch(fetchTweets());
  },[dispatch])
  return (
    <Paper sx={{ height: '100%', borderRadius: 0, borderBottom: 0, borderTop: 0, }}>
     
      <Header/>
      {isLoading ?  <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}><CircularProgress  /></div> :
        tweets.map(tweet => 
          <Tweet key={tweet._id} user={tweet.user} text={tweet.text}
          />
        )
      }
    </Paper>
  );
};

export default Content;