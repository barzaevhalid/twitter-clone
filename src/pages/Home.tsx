import React from 'react';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
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


const List = styled('ul')(({}) => ({
  margin: 0,
  padding: 0,
  listStyle: 'none'
}));
const ListItem = styled('li')(({}) => ({
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center'
}));


const Home: React.FC = () => {
 
  return (
    <section>
      <Grid sx={{ flexGrow: 1 }} container >
        <Grid item xs={1}>
          <List>
            <ListItem>
              <IconButton>
                <TwitterIcon sx={{fontSize: 50}} color='primary'/>
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <HomeIcon color='primary'/>
              </IconButton>
              <Typography  fontWeight='inherit' fontSize={19} color='primary' sx={{cursor: 'pointer'}} >Главная</Typography>
              </ListItem>
            <ListItem>
              <IconButton>
                <TagIcon sx={{color: 'black'}} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19}>Поиск</Typography>
              </ListItem>
            <ListItem>
              <IconButton>
                <NotificationsNoneIcon sx={{color: 'black'}} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19}>Уведомления</Typography>
              </ListItem>
            <ListItem>
              <IconButton>
                <MailOutlineIcon sx={{color: 'black'}} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19}>Сообщения</Typography>
              </ListItem>
            <ListItem>
              <IconButton>
                <BookmarkBorderIcon sx={{color: 'black'}} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19}>Закладки</Typography>
              </ListItem>
            <ListItem>
              <IconButton>
                <ListAltIcon sx={{color: 'black'}} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19}>Списки</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <PersonOutlineIcon sx={{color: 'black'}} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19}>Профиль</Typography>
            </ListItem>
            <ListItem>
              <IconButton>
                <MoreHorizIcon sx={{color: 'black'}} />
              </IconButton>
              <Typography fontWeight='inherit' fontSize={19}>Еще</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8} >center</Grid>
        <Grid item xs={3}>right</Grid>
      </Grid>
    </section>
  );
};

export default Home;