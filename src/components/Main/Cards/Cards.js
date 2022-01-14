import styles from "./Cards.module.css";
import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function Cards(props) {
  const currentUser = useContext(CurrentUserContext);
  // console.log('currentUser!!!', currentUser)
  // console.log('data!!!', props.data)
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.data.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.data.likes.some((i) => i._id === currentUser._id);
  // console.log('isLiked', isLiked)

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `...`;

  function handleClich() {
    props.handleCardClick(props.data);
  }

  function handleLike() {
    props.handleCardLike(props.data);
  }
  function handelDelet() {
    console.log("click");
    props.handleCardDelete(props.data);
  }
  return (
    <div className={styles.element}>
      <img
        src={props.data.link}
        alt={`Фотография ${props.data.name}`}
        className={styles.img}
        onClick={handleClich}
      />
      <h2 className={styles.name}>{props.data.name}</h2>
      <button
        className={isLiked ? styles.likeActive : styles.like}
        onClick={handleLike}
        type="button"
      ></button>
      <button
        className={isOwn ? styles.delete : styles.deleteHidden}
        onClick={handelDelet}
        type="button"
      ></button>
      <div className={styles.counter}>{props.data.likes.length}</div>
    </div>
  );
}

export default Cards;
