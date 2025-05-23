import { ThemeOptions } from '@mui/material';

export default {
  palette: {
    primary: {
      main: '#1473e6',
    },
    secondary: {
      main: '#1473e6',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontSize: 16,
        },
      },
    },
  },
} as ThemeOptions;
