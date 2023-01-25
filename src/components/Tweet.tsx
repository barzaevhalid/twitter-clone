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
  paddingTop: '10px',
  borderBottom: '1px solid lightgray',
  '&:hover': {
    background: 'rgb(245, 248, 250)'
  }
}));
const CustomIconButtonWrapper = styled('div')(() => ({
  position: 'relative',
  left: -9,
}));


interface TweetProps {
  text: string,
  user: {
    fullname: string,
    username: string,
    avatarUrl: string,
  }
}
const Tweet: React.FC<TweetProps> = ({ text, user }: TweetProps): React.ReactElement => {
  return (
    <CustomPaperTweet variant='outlined' sx={{ borderRadius: 0, borderLeft: 0, borderRight: 0, borderTop: 0 }}>
      <Grid container spacing={3} sx={{ padding: '10px 15px' }}>
        <Grid item xs={1}>
          <Avatar sx={{ marginTop: '5px' }} alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <Typography><b>{user.fullname}</b> <span style={{ color: 'gray' }}>@{user.username} · 1 ч</span></Typography>
          <Typography variant='body1'>{text}</Typography>
          <ButtonsGroup>
            <CustomIconButtonWrapper>
              <IconButton>
                <ModeCommentOutlinedIcon color='primary' sx={{ fontSize: 18 }} />
              </IconButton>
              <span>1</span>
            </CustomIconButtonWrapper>
            <IconButton>
              <RepeatOutlinedIcon color='primary' sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon color='primary' sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton>
              <FileUploadOutlinedIcon color='primary' sx={{ fontSize: 18 }} />
            </IconButton>
          </ButtonsGroup>
        </Grid>
      </Grid>

    </CustomPaperTweet>
  );
};

export default Tweet;