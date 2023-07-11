import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { AppNavLink } from '../../AppNavLink/AppNavLink';

interface Props {
  items: { name: string, path: string }[];
  handleDrawerToggle: () => void;
  isDrawerOpen: boolean;
}

export const MobileDrawer: FC<Props> = (props) => {
  const {
    isDrawerOpen,
    handleDrawerToggle,
    items,
  } = props;

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
          <Divider />
          <List>
            {items.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                style={{ textDecoration: 'none' }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <AppNavLink to={item.path} key={item.name}>
                      {item.name}
                    </AppNavLink>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
