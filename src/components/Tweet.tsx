import { Avatar, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const ButtonsGroup = styled('div')(() => ({
  display: 'flex',
  justifyContent: "space-between",
  maxWidth: '425px',
  marginTop: '10px'
}));

const CustomPaperTweet = styled(Paper)(() => ({
  '&:hover': {
    background: 'rgb(245, 248, 250)'
  }
}));
const CustomIconButtonWrapper = styled('div')(() => ({}));

const Tweet = () => {
  return (
    <CustomPaperTweet variant='outlined' sx={{ borderRadius: 0, borderLeft: 0, borderRight: 0, }}>
    <Grid container spacing={3} sx={{ padding: '10px 15px' }}>
      <Grid item xs={1}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Grid>
      <Grid item xs={11}>
        <Typography><b>user</b> <span style={{ color: 'gray' }}>@slark</span></Typography>
        <Typography variant='body1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui expedita molestiae, reiciendis molestias impedit dicta temporibus incidunt voluptates sequi est, nemo quisquam ipsum laborum consectetur esse optio, quis aliquid perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum tempora, rerum, temporibus, itaque libero molestiae sunt maxime quibusdam cupiditate ab magnam quasi in. Aspernatur alias minus enim quae, laudantium optio!</Typography>
        <ButtonsGroup>
          <CustomIconButtonWrapper>
            <IconButton>
              <ModeCommentOutlinedIcon color='primary' sx={{  fontSize: 18 }} />
            </IconButton>
            <span>1</span>
          </CustomIconButtonWrapper>
          <IconButton>
            <RepeatOutlinedIcon color='primary' sx={{  fontSize: 18 }} />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlinedIcon color='primary' sx={{  fontSize: 18 }} />
          </IconButton>
          <IconButton>
            <FileUploadOutlinedIcon color='primary' sx={{  fontSize: 18 }} />
          </IconButton>
        </ButtonsGroup>
      </Grid>
    </Grid>

  </CustomPaperTweet>
  );
};

export default Tweet;