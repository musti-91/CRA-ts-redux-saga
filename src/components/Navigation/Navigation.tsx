import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/spotify_logo_green.png';
import { Nav, Container, IcoLogo, NavElements } from './Navigation.style';

import { ROUTE } from 'pages/routes.constants';

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Container>
        <Link to={ROUTE.ROOT}>
          <IcoLogo src={logo} />
        </Link>
        <NavElements>
          <Link to={ROUTE.ROOT}>Home</Link>
          <Link to={ROUTE.PROFILE}>Profile</Link>
        </NavElements>
      </Container>
    </Nav>
  );
};

export default memo(Navigation);
