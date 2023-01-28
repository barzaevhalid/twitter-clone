import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, ButtonGroup, Container, IconButton, Paper, TextField } from '@mui/material';

import { Typography, } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import Tweet from '../components/Tweet';
import SideBar from '../components/SideBar';
import Content from '../components/Content';



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
         <Content/>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder='Поиск в Твиттере' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;