import * as React from 'react';

import Container from "../../components/Container";
import Input from '../../components/Input'
import Button from "../../components/Button";

import styles from './Registration.module.css';


const Registration = () => {
  return (
    <Container>
      <h2>Sign Up</h2>
      <Input placeholder="name" className={styles['sign-up__item']}/>
      <Input placeholder="email" type="email" className={styles['sign-up__item']}/>
      <Input placeholder="password" className={styles['sign-up__item']}/>
      <Button className={styles['sign-up__button']}>Sign Up</Button>
    </Container>
  );
}

export default Registration;