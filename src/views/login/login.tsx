import styles from './login.module.scss';

function Login() {
  return (
    <div className={styles.login}>
      <div>
        <h1>LOGIN</h1>
        <div className={styles.login_line}></div>
      </div>
    </div>
  );
}

export { Login };