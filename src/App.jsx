import { 
  BrowserRouter as Router, 
} from 'react-router-dom';
import {ThemeProvider} from 'styled-components'
import {GlobalStyle, Variables } from 'themes'

import { Routes } from 'utils/route'

const App = () => {
  return (
    <Router> 
      <ThemeProvider theme={Variables}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
    </Router> 
  );
}

export default App;
