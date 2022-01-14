import styles from "./Login.module.css";
import { useState } from "react";
function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function submitLogin(e) {
    e.preventDefault();
    props.handelLogin(email, password);
  }
  function changeEmail(e) {
    let email = e.target.value;
    setEmail(email);
  }
  function changePassword(e) {
    let password = e.target.value;
    setPassword(password);
  }

  return (
    <section className={styles.container}>
      <form
        action="#"
        name={props.name}
        onSubmit={submitLogin}
        className={styles.registration}
        noValidate
      >
        <h3 className={styles.heading}>Вход</h3>
        <input
          className={styles.form__info}
          onChange={changeEmail}
          type="email"
          placeholder="Email"
          required
          minLength={2}
          maxLength={40}
        />
        <span className={styles.form__input_type_error}></span>
        <input
          className={styles.form__info}
          onChange={changePassword}
          type="password"
          placeholder="Пароль"
          required
          minLength={2}
          maxLength={200}
        />
        <span className={styles.form__input_type_error}></span>
        <button className={styles.form__btn} type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
