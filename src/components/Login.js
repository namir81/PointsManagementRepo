import React, { useCallback, useContext } from "react";
import Button from "react-bootstrap/Button";    
import { withRouter, Redirect } from "react-router";
import { firebaseApp } from '../firebase';

import { AuthContext } from "../auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
          //debugger;
        await firebaseApp
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    //debugger;
    return <Redirect to="/points" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <Button variant="primary" type="submit"> Log in</Button>
      </form>
    </div>
  );
};

export default withRouter(Login);
