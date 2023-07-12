import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  to: string;
  children: React.ReactNode;
}

export const LinkWithSearchParams: FC<Props> = ({ children, to }) => {
  const location = useLocation();

  const toWithSearchParams = `${to}${location.search}`;

  return (
    <Link
      to={toWithSearchParams}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </Link>
  );
};
