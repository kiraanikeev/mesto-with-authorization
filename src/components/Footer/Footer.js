import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>© 2020 Mesto Russia</p>
    </div>
  );
}

export default Footer;
