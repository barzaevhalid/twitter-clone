import { Avatar, Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid/Grid';
import React from 'react';
import Tweet from './Tweet';
import { styled } from '@mui/material/styles';
import Header from './Header';





const Content = () => {
  return (
    <Paper sx={{ height: '100%', borderRadius: 0, borderBottom: 0, borderTop: 0, }}>
     
      <Header/>
      {
        [...new Array(10)].fill(
          <Tweet user={{
            fullname: 'Халид',
            username: 'Баз',
            avatarUrl: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }} text={'Фонд Банги @BungieLove · 29 дек. 2022 г. В прямом эфире с @TheLostDrake сейчас! Присоединяйтесь к нам, пока мы играем @DestinyTheGame и поблагодарить @Бунги сообщество для потрясающей #Game2Give, раздавая множество отличных призов! Swag, Lightfall и даже студийный тур!'}
          />
        )
      }
    </Paper>
  );
};

export default Content;