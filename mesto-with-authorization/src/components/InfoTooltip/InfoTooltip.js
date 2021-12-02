import React from "react";
import styles from "./InfoTooltip.module.css";
import positive from "../../images/green.jpg";
import negative from "../../images/stop.jpg";

function InfoTooltip(props) {
  const close = () => {
    props.setTooltipExist(false);
    props.setWhatTooltip(false);
  };
  return (
    <div
      className={props.tooltipExist ? styles.active : styles.popup}
      onClick={close}
    >
      <div className={styles.overlay}>
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
          <button className={styles.btnClose} onClick={close} />
          <img
            className={styles.img}
            src={props.whatTooltip ? positive : negative}
            alt={
              props.whatTooltip
                ? "Ура! Получилось! Зеленая галочка"
                : "Не вышло :( Красный крестик"
            }
          />
          <h3 className={styles.expression}>
            {props.whatTooltip
              ? `Вы успешно зарегистрировались!`
              : `Что-то пошло не так! 
    Попробуйте ещё раз.`}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
