import styles from "./ImagePopup.module.css";

function ImagePopup(props) {
  console.log("in popup", props.selectedCard.link);

  return (
    <div>
      <section
        className={props.visibleCard ? styles.active : styles.popup}
        onClick={() => props.cardPictureCloseVisible(false)}
      >
        <div className={styles.overlay}>
          <div
            className={styles.containerPhoto}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.btnClose}
              type="button"
              onClick={() => props.cardPictureCloseVisible(false)}
            />
            <img
              className={styles.popup__imge}
              src={props.selectedCard.link}
              alt="картинки пока нет"
            />
            <h3 className={styles.popup__name}>{props.selectedCard.name}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ImagePopup;
