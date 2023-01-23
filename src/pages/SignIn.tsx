import { Autocomplete, TextField, Typography, } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import React from 'react';
import Modal from '../components/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  height: 'calc(100vh - 84px)',
}));

//-----------

const BlueSide = styled('section')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flex: '0 0 50%',
  alignItems: 'center',
  backgroundColor: "#71C9f8",
  justifyContent: 'center',
  overflow: "hidden",
}));
const List = styled('ul')(({ }) => ({
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: 380,
  "& h6": {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
    "& svg": {
      fontSize: "32px",
      marginRight: '15px',

    }
  }
}));
const ListItem = styled('li')(({ }) => ({
  marginTop: "40px",
}));

//------------

const LoginSide = styled('section')(({ theme }) => ({
  display: 'flex',
  flex: '0 0 50%',
  alignItems: 'center',
  justifyContent: 'center '
}));
const CustomDialogActions = styled(DialogActions)(({theme}) => ({
  paddingBottom: '15px'
})) 

const LoginSideWrapper = styled('div')(({ theme }) => ({
  width: 380,
}));
const SignIn: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <Wrapper>
      <BlueSide>
        <TwitterIcon color='primary' sx={{ position: 'absolute', top: '70%', left: '50%', width: "350%", height: "350%", transform: "translate(-50%, -50%)" }} />
        <List>
          <ListItem>
            <Typography variant='h6'> <SearchIcon />Читайте о том, что вам интересно.</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6'><PeopleOutlineIcon />Узнавайте, о чем говорят в мире.</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6'><ModeCommentOutlinedIcon />Присоединяйтсь к общению.</Typography>
          </ListItem>
        </List>
      </BlueSide>

      <LoginSide>
        <LoginSideWrapper>
          <TwitterIcon fontSize='inherit' sx={{ fontSize: '45px', color: '#0075edc4' }} />

          <Typography fontWeight={700} fontSize={33} mt={'20px'} variant='h4'>Узнайте что происходит в мире прямо сейчас</Typography>
          <Typography mt={'45px'}><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
          <br />
          <Button variant='contained' sx={{ background: "#26abf3" }} fullWidth>Зарегистироваться</Button>
          <Button onClick={handleClickOpen} sx={{ mt: "10px" }} color="primary" variant='outlined' fullWidth>Войти</Button>

        </LoginSideWrapper>

        <Modal open={open} handleClose={handleClose} title={'Войти в твиттер'}>
       <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="E-mail"
              type="email"
              fullWidth
              variant="standard"
            />
             <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Пароль"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <CustomDialogActions>
            <Button onClick={handleClose} variant='outlined'>Закрыть</Button>
            <Button onClick={handleClose} variant='contained'>Войти</Button>
          </CustomDialogActions>
          </Modal>
      </LoginSide>
    </Wrapper>
  );
};

export default SignIn;
