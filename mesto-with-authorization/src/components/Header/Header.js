import styles from "./Header.module.css";
import logo from "../../images/Vector.png";
function Header(props) {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="MESTO" className={styles.header__logo} />
        <div className={styles.header__line}></div>
      </div>
    </div>
  );
}

export default Header;
