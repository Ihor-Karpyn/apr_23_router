import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { MobileDrawer } from './Drawer/MobileDrawer';
import '../AppNavLink/AppNavLink.scss';
import { AppNavLink } from '../AppNavLink/AppNavLink';

const navItems = [
  { name: 'Posts', path: '/posts' },
  { name: 'Contacts', path: '/contacts' },
  { name: 'About', path: '/about' },
];

export const AppHeader: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <AppNavLink to={item.path} key={item.name}>
                {item.name}
              </AppNavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <MobileDrawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        items={navItems}
      />
    </>
  );
};
