import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import makeStyles from '@material-ui/core';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//const useStyles = makeStyles((theme) => ({
/////offset: theme.mixins.Toolbar,
//}));

const Navbar = () => {
  //const classes = useStyles();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              color="white"
              sx={{ flexGrow: 1 }}
            >
              TicoAutos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

//export default function Navbar(){

//}
export default Navbar;
