import * as React from 'react';
import {Link} from "react-router-dom";

import Container from "../../components/Container";
import Input from '../../components/Input'
import Button from "../../components/Button";

import styles from './Registration.module.css';


const Registration = ({onSignUp, errors}) => {
  const [name, setName] = React.useState('');
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');


  const onNameChange = (event) => setName(event.currentTarget.value);
  const onLoginChange = (event) => setLogin(event.currentTarget.value);
  const onPassword = (event) => setPassword(event.currentTarget.value);

  const handleOnSignUp = React.useCallback(() => {
    const trimedName = name.trim();
    const trimedLogin = login.trim();
    const trimedPassword = password.trim();

    onSignUp(trimedName, trimedLogin, trimedPassword);

  }, [name, login, password]);

  return (
    <Container>
      <h2>Sign Up</h2>
      {errors.map(error => (<div className={styles['sign-up__error']} key={error}>{error}</div>))}
      <Input placeholder="name" className={styles['sign-up__item']} value={name} onChange={onNameChange}/>
      <Input placeholder="email" type="email" className={styles['sign-up__item']} value={login} onChange={onLoginChange}/>
      <Input placeholder="password" className={styles['sign-up__item']} value={password} onChange={onPassword}/>
      <Link className={styles['sign-up__link']} to="/login">Log In</Link>
      <Button className={styles['sign-up__button']} onClick={handleOnSignUp}>Sign Up</Button>
    </Container>
  );
}

export default Registration;