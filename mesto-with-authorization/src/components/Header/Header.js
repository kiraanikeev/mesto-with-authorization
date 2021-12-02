import styles from "./Header.module.css";
import logo from "../../images/Vector.png";
import { Route, Link } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="MESTO" className={styles.header__logo} />
        <Route path="/signup">
          <p className={styles.link_p}>
            <Link className={styles.link} to="/signin">
              Войти
            </Link>
          </p>
        </Route>
        <Route path="/signin">
          <p className={styles.link_p}>
            <Link className={styles.link} to="/signup">
              Регистрация
            </Link>
          </p>
        </Route>
        <Route exact path="/">
          <div>
            <p className={styles.link_div}>{props.userEmail}</p>
            <Link className={styles.link} to="/signin" onClick={props.outLogin}>
              Выйти
            </Link>
          </div>
        </Route>
      </div>
      <div className={styles.header__line}></div>
    </div>
  );
}

export default Header;
