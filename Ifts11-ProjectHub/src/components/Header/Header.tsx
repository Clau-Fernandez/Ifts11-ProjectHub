import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography  variant="h6" component="div" sx={{ flexGrow: 1,  fontFamily: 'Martian Mono, monospace' }}>
          IFTS-<span style ={{color: '#ab47bc'}}>ProyectHub</span>
        </Typography >
        <Button variant="contained" sx={{ fontSize: 15, fontWeight: 'bold' }}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
