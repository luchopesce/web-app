import React from 'react';
import Router from './routes/sections';
import ThemeProvider from './theme';
import {useScrollToTop} from './hooks/use-scroll-to-top.js'

const App = () => {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
