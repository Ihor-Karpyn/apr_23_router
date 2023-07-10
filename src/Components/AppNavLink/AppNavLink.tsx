import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import Button from '@mui/material/Button';
import './AppNavLink.scss';

interface Props {
  to: string;
  children: React.ReactNode;
}

export const AppNavLink: FC<Props> = ({
  to, children,
}) => {
  return (
    <NavLink
      className={({ isActive }) => cn(
        'navLink',
        { 'navLink--active': isActive },
      )}
      to={to}
      style={{ textDecoration: 'none' }}
    >
      <Button sx={{ color: 'inherit' }}>
        {children}
      </Button>
    </NavLink>
  );
};
