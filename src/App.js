import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Main from "./pages/Main";
import Login from './pages/Login';
import Registration from './pages/Registration';


function App() {

  return (
    <Switch>
      <Route path="/login" render={() => <Login />} />
      <Route path="/signup" render={() => <Registration />} />
      <Route path="/" render={() => <Main />} exact/>
    </Switch>
  );
}

export default App;
