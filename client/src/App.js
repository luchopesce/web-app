import React from 'react';
import HomePage from './pages/HomePage';
import ThemeProvider from './theme';

const App = () => {
  return (
    <ThemeProvider>
    <div>
      <HomePage />
    </div>
    </ThemeProvider>
  );
};

export default App;
