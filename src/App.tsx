import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './Components/AppHeader/AppHeader';

export const App: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};
