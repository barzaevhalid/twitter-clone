import styled from '@emotion/styled';
import { InputBase } from '@mui/material';
import React from 'react';

const SearchTextField = styled(InputBase)({
  position: 'relative',
  paddingTop: '20px',
  left: '-10px',
  input: {
    background: '#E6ECF0',
    borderRadius: '30px',
    padding: '10px 30px  10px  45px'
  },
  svg: {
    position: 'absolute',
    left: '25px',
    top: '32px',
  }


});

export default SearchTextField;