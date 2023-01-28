import { Avatar, Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid/Grid';
import React from 'react';
import Tweet from './Tweet';
import { TextareaAutosize } from '@mui/base';
import { styled } from '@mui/material/styles';

import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

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

const CustomAddTweetBlock = styled('div')(() => ({
  display:  'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '7px'
}))
const Content = () => {
  return (
    <Paper sx={{ height: '100%', borderRadius: 0, borderBottom: 0, borderTop: 0, }}>
      <Paper variant='outlined' sx={{ borderRadius: 0, border: 0, borderBottom: '1px solid lightgray', padding: '10px 15px', position: 'sticky', top: '0px', zIndex: '1',  }}>
        <Typography variant='h6' fontWeight={700}> Глваная
        </Typography>
        {/* <AutoAwesomeOutlinedIcon color='primary'/> */}
      </Paper>
      <Paper variant='outlined' sx={{ borderRadius: 0, border: 0, borderBottom: '1px solid lightgray', padding: '10px 15px', paddingBottom: '25px' }}>
        <Grid container>
          <Grid item xs={1}>
            <Avatar sx={{ marginTop: '5px' }} alt={`Аватарка пользователя `} />
          </Grid>
          <Grid item xs={11}>
            <CustomTextareaAutosize minRows={1} placeholder='Что происходит ?' />
            <CustomAddTweetBlock>
            <div>
            <CropOriginalIcon color='primary'/>
            <SentimentSatisfiedAltIcon color='primary' sx={{marginLeft: '20px'}}/>
            </div>
            <Button color='primary' variant='contained'  >Твитнуть</Button>

            </CustomAddTweetBlock>
          </Grid>
        </Grid>
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
  );
};

export default Content;