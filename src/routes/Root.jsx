import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navbar } from '../ui';

function Root() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}

export default Root;
