import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, ButtonGroup, Container, IconButton, InputAdornment, Paper, TextField } from '@mui/material';

import { Typography, } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import Tweet from '../components/Tweet';
import SideBar from '../components/SideBar';
import Content from '../components/Content';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';
import { borderBottom } from '@mui/system';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchTextField from '../components/SearchTextField';




const CustomHotTopics = styled('div')(() => ({

}))


const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Grid sx={{ flexGrow: 1, }} container spacing={3}>
        <SideBar />
        <Grid item xs={6}>
          <Content />
        </Grid>
        <Grid item xs={3} >
          <div style={{ position: 'sticky', top: 0, }}>
            <SearchTextField fullWidth placeholder='Поиск в Твиттере' startAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            } />

            <Paper variant='outlined' sx={{ marginTop: '30px', background: '#ededed5e', borderLeft: 'none', borderRight: 'none', borderTop: 'none', }}>
              <CustomHotTopics>
                <Typography variant='h6' sx={{ padding: '10px' }} borderBottom='1px solid lightgray'>Актуальные темы</Typography>
                <Typography variant='h6' sx={{ padding: '10px' }} borderBottom='1px solid lightgray'>Актуальные темы</Typography>
                <Typography variant='h6' sx={{ padding: '10px' }} borderBottom='1px solid lightgray'>Актуальные темы</Typography>
                <Typography variant='h6' sx={{ padding: '10px' }} borderBottom='1px solid lightgray'>Актуальные темы</Typography>
              </CustomHotTopics>
            </Paper>
            <Paper variant='outlined' sx={{ marginTop: '30px', background: '#ededed5e', borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}>
              <CustomHotTopics>
                <Typography variant='h6' sx={{ padding: '10px', fontWeight: 700 }} borderBottom='1px solid lightgray'>Кого читать</Typography>
                <div style={{ display: 'flex', padding: '10px', borderBottom: '1px solid lightgray', alignItems: 'center' }}>
                  <Avatar sx={{ marginTop: '5px' }} />
                  <div>
                    <Typography variant='h6' sx={{ padding: '0 10px 0 10px' }} >Кого читать тем</Typography>
                    <Typography sx={{ paddingLeft: '10px', color: '#8d8888' }} >@Kianu  rivs</Typography>
                  </div>
                  <PersonAddAltIcon color='primary' sx={{ marginLeft: '10px' }} />
                </div>
              </CustomHotTopics>
            </Paper>
          </div>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Home;