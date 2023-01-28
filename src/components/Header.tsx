import { Paper, Typography, Grid, Avatar, Button, styled } from '@mui/material';
import { TextareaAutosize } from '@mui/base';

import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import React from 'react';

const CustomAddTweetBlock = styled('div')(() => ({
  display:  'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '7px'
}))
const CustomTextareaAutosize = styled(TextareaAutosize)(() => ({
  border: 'none',
  resize: 'none',
  width: '100%',
  padding: '10px',
  fontSize: '22px',
  "&:focus": {
    border: 'none'
  },
  "&:focus-visible": {
    outline: 'none'
  }
}));
const Header = () => {
  return (
    <>
    <Paper variant='outlined' sx={{ borderRadius: 0, border: 0, borderBottom: '1px solid lightgray', padding: '10px 15px', position: 'sticky', top: '0px', zIndex: '1', }}>
      <Typography variant='h6' fontWeight={700}> Глваная
      </Typography>
      {/* <AutoAwesomeOutlinedIcon color='primary'/> */}
    </Paper><Paper variant='outlined' sx={{ borderRadius: 0, border: 0, borderBottom: '1px solid lightgray', padding: '10px 15px', paddingBottom: '25px' }}>
        <Grid container>
          <Grid item xs={1}>
            <Avatar sx={{ marginTop: '5px' }} alt={`Аватарка пользователя `} />
          </Grid>
          <Grid item xs={11}>
            <CustomTextareaAutosize minRows={1} placeholder='Что происходит ?' />
            <CustomAddTweetBlock>
              <div>
                <CropOriginalIcon color='primary' />
                <SentimentSatisfiedAltIcon color='primary' sx={{ marginLeft: '20px' }} />
              </div>
              <Button color='primary' variant='contained'>Твитнуть</Button>

            </CustomAddTweetBlock>
          </Grid>
        </Grid>
      </Paper></>
  );
};

export default Header;