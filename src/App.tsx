import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { Routes } from 'routes';

import { GlobalStyles } from 'styles/GlobalStyles';
import { light } from 'styles/themes/light';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
};
