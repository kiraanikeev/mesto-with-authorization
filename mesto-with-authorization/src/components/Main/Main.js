import styles from "./Main.module.css";
import { api } from "../Api/Api";
import { useState, useEffect, useContext } from "react";
import Cards from "./Cards/Cards";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className={styles.main}>
      <section className={styles.profile}>
        <img
          src={currentUser.avatar}
          alt="фотография человека"
          className={styles.avatar}
        />
        <button
          className={styles.buttonAvatar}
          onClick={props.handleAvatarClick}
        ></button>
        <div className={styles.info}>
          <h1 className={styles.name}>{currentUser.name}</h1>
          <button
            className={styles.editBtn}
            type="button"
            onClick={props.handleProfileClick}
          ></button>
          <p className={styles.status}>{currentUser.about}</p>
        </div>
        <button
          className={styles.addBtn}
          type="button"
          onClick={props.handleAddPlaceClick}
        ></button>
      </section>

      <section className={styles.elements}>
        {props.cardsArray.map((item) => {
          return (
            <Cards
              key={item._id}
              data={item}
              handleCardClick={props.handleCardClick}
              handleCardLike={props.handleCardLike}
              handleCardDelete={props.handleCardDelete}
            ></Cards>
          );
        })}
      </section>
    </div>
  );
}

export default Main;
