import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Main from "./pages/Main";
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from "./components/PrivateRoute";

import {useAuth} from './hooks';

function App() {
  const {onLogin, errors, onSignup, isAuth} = useAuth();

  return (
    <Switch>
      <PrivateRoute isAuthenticated={isAuth} path="/" exact>
        <Main />
      </PrivateRoute>
      {/*<Route path="/" render={() => <Main />} exact/>*/}
      <Route path="/login" render={() => <Login onLogin={onLogin} errors={errors}/>} />
      <Route path="/signup" render={() => <Registration onSignUp={onSignup} errors={errors}/>} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
