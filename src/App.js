import React, { useState } from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';

import Home from './Home';

const useStyles = makeStyles({
    root: {

    },
});

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
  spacing: 4,
  palette: {
    type: darkMode ? 'dark' : 'light',
    primary: {
      main: "#f44336"
    },
    secondary: {
      main: "#3f51b5"
    },
    background: {
      default: darkMode ? '#232323' : '#fff',
      dark: darkMode ? '#181818' : '#f4f6f8',
      paper: darkMode ? '#232323' : '#fff'
    }
  }
});

  const usingStyles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
