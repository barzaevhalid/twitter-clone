import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Container, IconButton, Paper, TextField } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Typography, } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
const List = styled('ul')(({ }) => ({
  margin: 0,
  padding: 0,
  listStyle: 'none'
}));
const ListItem = styled('li')(({ }) => ({
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  "&:hover": {
    color: 'red'
  }
}));

const SearchTextField = styled(InputBase)({
  input: {
    background: '#E6ECF0',
    borderRadius: '30px'
  }
});

const Home: React.FC = () => {

  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }} >
      <Grid sx={{ flexGrow: 1 }} container spacing={3} >
        <Grid item xs={3}>
          <List>
            <ListItem>
              <IconButton sx={{ margin: '15px 0' }}>
                <TwitterIcon sx={{ fontSize: 40 }} color='primary' />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <HomeIcon color='primary' sx={{ fontSize: 30 }} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19} color='primary' sx={{ cursor: 'pointer' }} ml="12px">Главная</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <TagIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19} ml="12px">Поиск</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <NotificationsNoneIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19} ml="12px">Уведомления</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <MailOutlineIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19} ml="12px">Сообщения</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <BookmarkBorderIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19} ml="12px">Закладки</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <ListAltIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19} ml="12px">Списки</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <PersonOutlineIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19} ml="12px">Профиль</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <MoreHorizIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19} ml="12px">Еще</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>

          <Paper sx={{ height: '100%', borderRadius: 0, borderBottom: 0, borderTop: 0, }} variant="outlined">
            <Paper variant='outlined' sx={{ borderRadius: 0, border: 0, padding: '10px 15px' }}>
              <Typography variant='h6' fontWeight={700}> Глваная
              </Typography>
              {/* <AutoAwesomeOutlinedIcon color='primary'/> */}
            </Paper>
            <Paper variant='outlined' sx={{ borderRadius: 0, borderLeft: 0, borderRight: 0, }}>
              <Grid container spacing={3} sx={{ padding: '10px 15px' }}>
                <Grid item xs={1}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item xs={11} >
                  <Typography><b>user</b> <span style={{color: 'gray'}}>@slark</span></Typography>
                </Grid>
              </Grid>
            </Paper>
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