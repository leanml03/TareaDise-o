import React from 'react';
//import './style.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeconfig';
//import Navbar from './components/Navbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//Estilos
//const useStyle = makeStyles({
//Boton: { color: 'black', background: 'green', border: 0, padding: '0 30px' },
// });

export default function SignIn() {
  const handleSubmit = (event) => {
    //variable que ejecuta el boton
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('correo'),
      password: data.get('contrasenna'),
    });
  };

  //export default function App() {
  //const classes = useStyle();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky">
          <Toolbar>
            <img
              src="https://i.postimg.cc/9QtztCRS/Logo-Tico-Autos.png"
              alt="new"
              width="150"
              sx={{ mr: 2 }}
            />
            <Typography variant="h6" color="inherit" noWrap>
              TicoAutos
            </Typography>
          </Toolbar>
        </AppBar>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 3,
              //display:"flex",
              flexdirection: 'column',
              alignitems: 'center',
              bgcolor: '#ff',
              height: '200vh',
              align: 'center',
            }}
          >
            {' '}
            <img
              src="https://i.postimg.cc/9QtztCRS/Logo-Tico-Autos.png"
              alt="new"
              width="440"
            />
            <Typography variant="h3" component="h2" align="center">
              TicoAutos
            </Typography>
            <Typography variant="h6" component="h2" align="center">
              Los mejores automoviles <br />
              ¡A tu ALCANCE!
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              action="/new-user"
              method="POST"
            >
              <form action="/new-user" method="POST">
                <div class="form-group">
                  <TextField
                    id="correo"
                    label="Correo Electronico"
                    variant="outlined"
                    name="correo"
                    type="text"
                    size="small"
                    fullWidth
                    margin="normal"
                    //placeholder="Correo"
                    autoFocus
                  />
                </div>
                <br />
                <div class="form-group">
                  <TextField
                    id="contrasenna"
                    name="contrasenna"
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    size="small"
                    fullWidth
                    margin="normal"
                    //placeholder="Contraseña"
                  />
                </div>
                <div class="form-group">
                  <Button
                    //classname="Boton"
                    type="submit"
                    color="primary"
                    variant="contained"
                    align="center"
                    sx={{ mt: 3, mb: 2 }}
                    margin="normal"
                  >
                    Iniciar Sesión
                  </Button>
                </div>
              </form>
            </Box>
            <br />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
