import { Grid, Avatar, Button, styled, TextareaAutosize, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


const CustomAddTweetBlock = styled('div')(() => ({
  display: 'flex',
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
const CustomCircularProgress = styled(CircularProgress)(() => ({
  display: 'block',
  transform:  "rotate(-75deg) !important",
  marginLeft: '5px',
  svg: {
    width: '15px',
  }

}))

interface AddTweetFormProps {
  maxRows?: number,
}

const AddTweetForm: React.FC<AddTweetFormProps> = ({maxRows}: AddTweetFormProps) => {
  const [text, setText] = useState('')
  const textLimitProcent = text.length / 280 * 100
 
  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) : void => {
  if(e.currentTarget) {
    setText(e.currentTarget.value)
  }
}
  const handleClickTweet = (): void => {
    setText('')
  }

  return (
    <Grid container>
      <Grid item xs={1}>
        <Avatar sx={{ marginTop: '5px' }} alt={`Аватарка пользователя `} />
      </Grid>
      <Grid item xs={11}>
        <CustomTextareaAutosize minRows={1} maxRows={maxRows} placeholder='Что происходит ?' onChange={handleChangeTextarea}  value={text} />
        <CustomAddTweetBlock>
          <div>
            <CropOriginalIcon color='primary' />
            <SentimentSatisfiedAltIcon color='primary' sx={{ marginLeft: '20px' }} />
          </div>
          <div style={{display: 'flex', }}>
            <div style={{display: 'flex', alignItems: 'flex-end', position: 'relative', top: '-7px',}} >
              {text && <Typography sx={{paddingRight: '5px',}}>{280 - text.length}</Typography>}
            <CustomCircularProgress variant="determinate" value={textLimitProcent > 100 ? 100 : textLimitProcent}  sx={{color: text.length >= 280 ? 'red' : 'primary',}}/>
            </div>

            <Button onClick={handleClickTweet} disabled={ text.length > 280 ? true: false}color='primary' variant='contained'>Твитнуть</Button>
          </div>


        </CustomAddTweetBlock>
      </Grid>
    </Grid>
  );
};

export default AddTweetForm;