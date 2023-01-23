
import { useEffect, useState } from 'react';
import { Form } from './components/form/form';
import styles from './login.module.scss';

function Login(props:any) {
  const {setIsLogged} = props;
  useEffect(() => {
    
    return () => {
      localStorage.setItem('user','admin');
      localStorage.setItem('password','admin');
    }
  }, [])
  
  return (
    <div className={styles.login}>
      <div className={styles.login__text}>
        <h1>LOGIN</h1>
        <div className={styles.login__textLine}></div>
      </div>
      <div>
        <Form setIsLogged={setIsLogged}/>
      </div>
    </div>
  );
}

export { Login };