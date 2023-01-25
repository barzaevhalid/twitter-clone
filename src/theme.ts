import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          primary: blue,
          borderRadius: '50px',
          fontWeight: 700,
      
        },
      },
    },
  },
 
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

