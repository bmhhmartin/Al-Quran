import './App.css';
import AppRoute from './router/AppRoute';
import { Fragment } from 'react';
import {HashRouter} from 'react-router-dom';

function App() {
  return (
    <Fragment>
        <HashRouter>
          <AppRoute/>
        </HashRouter>
    </Fragment>
  );
}

export default App;
