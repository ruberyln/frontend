import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//import { StyledEngineProvider } from '@mui/material/styles';
//import Signup from './components/signup';
ReactDOM.render(<App />, document.getElementById('root'))


  ReactDOM.render(
    <React.StrictMode>
      <App />

    </React.StrictMode>,
    document.getElementById('root')
  );