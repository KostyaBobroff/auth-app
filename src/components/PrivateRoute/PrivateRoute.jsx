import {Redirect, Route} from "react-router-dom";
import * as React from 'react';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

function PrivateRoute({ children, isAuthenticated, ...rest  }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;