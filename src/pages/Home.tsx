import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, ButtonGroup, Container, IconButton, Paper, TextField } from '@mui/material';

import { Typography, } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import Tweet from '../components/Tweet';
import SideBar from '../components/SideBar';



const SearchTextField = styled(InputBase)({
  input: {
    background: '#E6ECF0',
    borderRadius: '30px'
  }
});



const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Grid sx={{ flexGrow: 1, }} container spacing={3}>
          <SideBar />
        <Grid item xs={6}>
          <Paper sx={{ height: '100%', borderRadius: 0, borderBottom: 0, borderTop: 0, }} variant="outlined">
            <Paper variant='outlined' sx={{ borderRadius: 0, border: 0, borderBottom: '1px solid lightgray', padding: '10px 15px' }}>
              <Typography variant='h6' fontWeight={700}> Глваная
              </Typography>
              {/* <AutoAwesomeOutlinedIcon color='primary'/> */}
            </Paper>
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
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder='Поиск в Твиттере' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;