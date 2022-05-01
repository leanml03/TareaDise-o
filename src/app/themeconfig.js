import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#001743',
      light: '#ce1126',
      dark: '#35c99a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
  },
});
export default theme;
