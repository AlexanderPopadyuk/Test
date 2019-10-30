import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

const MainLayout = ({ children }) => (
  <Container style={{ paddingTop: 80, paddingBottom: 80 }}>{children}</Container>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
