import { Button, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
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
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import Modal from './Dialog';
import AddTweetForm from './AddTweetForm';
const List = styled('ul')(({ }) => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  position: 'fixed'
}));
const ListItem = styled('li')(({ theme }) => ({
  cursor: 'pointer',
  fontWeight: 400,
  display: 'flex',
  alignItems: 'center',
  padding: '12px',
  transition: 'all .10s  ease-in-out',
  borderRadius: 30,
  "&:hover": {
    backgroundColor: 'rgba(15, 20, 25, 0.1)',
    color: '#1976d2'
  },

}));



const SideBar: React.FC = (): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)

  const handleClickOpenAddTweet = ():void => {
    setVisibleAddTweet(true)
  }
  const onCloseAddTweet = ():void => {
    setVisibleAddTweet(false)
  }
  const matches = useMediaQuery('(min-width:1300px)');
  const widthInSearch = useMediaQuery('(min-width: 1000px)')


  return (
    <Grid item xs={matches ? 3 : 1}>
      <List sx={{paddingLeft: !matches ? '30px !important' : '0 !important'  }}>
        <ListItem sx={{ background: 'none !important',  padding: 0, paddingLeft: '1px !important'  }}>
          <IconButton sx={{ margin: '15px 0' ,}}>
            <TwitterIcon sx={{ fontSize: 30,}} color='primary' />
          </IconButton>
        </ListItem>
        <ListItem>
          <HomeIcon  sx={{ fontSize: 30 }} />
          {matches && <Typography fontWeight='inherit' fontSize={19}  sx={{ cursor: 'pointer' }} ml="12px">Главная</Typography>}
        </ListItem>
        <ListItem>
          {widthInSearch ? <TagIcon sx={{  fontSize: 30 }} />
            : <SearchIcon sx={{ fontSize: 30 }} />}
          {matches && <Typography fontWeight='inherit' fontSize={19} ml="12px">Поиск</Typography>}
        </ListItem>
        <ListItem>
          <NotificationsNoneIcon sx={{ fontSize: 30 }} />
          {matches && <Typography fontWeight='inherit' fontSize={19} ml="12px">Уведомления</Typography>}
        </ListItem>
        <ListItem>
          <MailOutlineIcon sx={{  fontSize: 30 }} />
          {matches && <Typography fontWeight='inherit' fontSize={19} ml="12px">Сообщения</Typography>}
        </ListItem>
        <ListItem>
          <BookmarkBorderIcon sx={{  fontSize: 30 }} />
          {matches && <Typography fontWeight='inherit' fontSize={19} ml="12px">Закладки</Typography>}
        </ListItem>
        <ListItem>
          <ListAltIcon sx={{  fontSize: 30 }} />
          {matches && <Typography fontWeight='inherit' fontSize={19} ml="12px">Списки</Typography>}
        </ListItem>
        <ListItem>
          <PersonOutlineIcon sx={{  fontSize: 30 }} />
          {matches && <Typography fontWeight='inherit' fontSize={19} ml="12px">Профиль</Typography>}
        </ListItem>
        <ListItem>
          <MoreHorizIcon sx={{  fontSize: 30 }} />
          {matches && <Typography fontWeight='inherit' fontSize={19} ml="12px">Еще</Typography>}
        </ListItem>
      
        { matches ? <Button onClick={handleClickOpenAddTweet} color='primary' variant='contained' fullWidth sx={{marginTop: '30px', padding: '10px'}}>Твитнуть</Button>
        :<Button onClick={handleClickOpenAddTweet} color='primary' variant='contained' fullWidth sx={{marginTop: '30px', padding: '10px', width: '30px', height: '40px', minWidth: '40px',minHeight: '100%', marginLeft: '7px'}}><CreateIcon /></Button> }
        {visibleAddTweet && <Modal title='' open={visibleAddTweet} handleClose={onCloseAddTweet}><div style={{width: 500, padding: 20}}><AddTweetForm maxRows={15}/></div></Modal>}
      </List>
      
    </Grid>
  );
};

export default SideBar;