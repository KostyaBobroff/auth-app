import * as React from 'react';
import {Link} from "react-router-dom";
import Container from "../../components/Container";
import Input from "../../components/Input/Input";
import Button from "../../components/Button";

import styles from './Login.module.css';

const Login = ({onLogin, errors}) => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLoginChange = (event) => setLogin(event.currentTarget.value);
  const onPasswordChange = (event) => setPassword(event.currentTarget.value);

  const handleOnLoginButton = React.useCallback(() => {
    const trimedLogin = login.trim();
    const trimedPassword = password.trim();

    onLogin(trimedLogin, trimedPassword);
  }, [password, login]);

  console.log(password, login);

  return (
    <Container>
      <h2>Login</h2>
      {errors.map(error => (<div className={styles['login__error']} key={error}>{error}</div>))}
      <Input placeholder="login" className={styles['login__item']} value={login} onChange={onLoginChange}/>
      <Input placeholder="password" className={styles['login__item']} value={password} onChange={onPasswordChange}/>
      <div className={styles['login__reference']}>
        Not registered? <Link to="/signup" className={styles['login__link']}>Create an account</Link>
      </div>
      <Button className={styles['login__button']} onClick={handleOnLoginButton}>Log In</Button>
    </Container>
  )
};

export default Login;