import React from 'react';
import { Container } from '@material-ui/core';

const MainLayout = ({ children }) => (
  <Container style={{ paddingTop: 80, paddingBottom: 80 }}>{children}</Container>
);

export default MainLayout;
