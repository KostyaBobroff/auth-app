import * as React from 'react';
import Container from "../../components/Container";
import Input from "../../components/Input/Input";
import Button from "../../components/Button";

import styles from './Login.module.css';


const Login = () => {

  return (
    <Container>
      <h2>Login</h2>
      <Input placeholder="login" className={styles['login__item']}/>
      <Input placeholder="password" className={styles['login__item']}/>
      <Button className={styles['login__button']}>Log In</Button>
    </Container>
  )
};

export default Login;