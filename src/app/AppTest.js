import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from './themeconfig';
import { Block } from '@mui/icons-material';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function MainPage() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
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
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                ¿Ocupas un Vehiculo?
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Obten los vehiculos de las mejores marcas, en las mejores
                condiciones, al mejor precio y lo mas cerca de donde te
                encuentres.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Busqueda Rapida</Button>
                <Button variant="outlined">Busqueda por Filtros </Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '15.25%',
                      }}
                      image="https://upload.wikimedia.org/wikipedia/commons/1/1b/2016_Toyota_HiLux_Invincible_D-4D_4WD_2.4_Front.jpg"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Precio: ₡20.000.000
                      </Typography>
                      <Typography>
                        Localización: Alajuela Centro <br /> Marca: Toyota{' '}
                        <br /> Modelo: Hilux
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained">
                        Contactar
                      </Button>
                      <Button size="small">Mas Detalles</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            ¿Tienes problemas con la pagina?
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Contactanos: soporteticoautos@ticoautos.cr
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}
