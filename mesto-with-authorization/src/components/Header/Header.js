import styles from "./Header.module.css";
import logo from "../../images/Vector.png";
import { Route, NavLink } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="MESTO" className={styles.header__logo} />
        <Route path="/signup"> 
        <p className={styles.link_p}><NavLink className={styles.link} to="/signin">Войти</NavLink></p>
        </Route>
        <Route path="/signin"> 
        <p className={styles.link_p}><NavLink className={styles.link} to="/signup">Регистрация</NavLink></p>
        </Route>
        <Route exact path="/"> 
        <p className={styles.link_p}><NavLink className={styles.link} to="/signin">Выйти</NavLink></p>
        </Route>
        </div>
        <div className={styles.header__line}></div>
      
    </div>
  );
}

export default Header;
