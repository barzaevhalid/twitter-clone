import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from '@mui/material/styles';

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

const SideBar: React.FC = (): React.ReactElement => {
  return (
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
  );
};

export default SideBar;