import { Paper, Typography, Grid, Avatar, Button, styled, CircularProgress } from '@mui/material';
import { TextareaAutosize } from '@mui/base';


import React from 'react';
import AddTweetForm from './AddTweetForm';

const Header: React.FC = () => {
  return (
    <>
      <Paper variant='outlined' sx={{ borderRadius: 0, border: 0, borderBottom: '1px solid lightgray', padding: '10px 15px', position: 'sticky', top: '0px', zIndex: '1', }}>
        <Typography variant='h6' fontWeight={700}> Глваная
        </Typography>
        {/* <AutoAwesomeOutlinedIcon color='primary'/> */}
      </Paper>
      <Paper sx={{
        borderRadius: 0, border: 0, borderBottom: '1px solid lightgray', padding: '10px 15px', paddingBottom: '25px',
      }}>

        <AddTweetForm/>
      </Paper>
      <div style={{ padding: '5px', background: '#d7d7d7' }} />
    </>
  );
};

export default Header;