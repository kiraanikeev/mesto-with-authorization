import styles from "./Popup.module.css";
import React, { useRef, useState } from "react";
import {useContext , useEffect} from 'react'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
function Popup(props) {


const [name, setName]=useState('')
const [description, setDescription]=useState('')

const [title, setTitle]=useState('')
const [link, setLink]=useState('')

function changeTitle(event){
let title = event.target.value
setTitle(title)
}
function changeLink(event){
  let link = event.target.value
  setLink(link)
  }

function changeName(event){
let name = event.target.value
setName(name)
}
function changeDescription(event){
  let description = event.target.value
  setDescription(description)
}

const currentUser = useContext(CurrentUserContext)
useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]);

function handleSubmit(event) {
  event.preventDefault();
  props.handleUpdateUser({
    name,
    about: description,
  });
  props.profileSetVisible(false)
} 


const avatarRef = useRef()

function handleSubmitAvatar(e) {
  e.preventDefault();
  props.onUpdateAvatar(avatarRef.current.value);
  avatarRef.current.value = "";
  props.avatarSetVisible(false)
} 

function handleAddPlaceSubmit(event){
  event.preventDefault();
  props.handelSetCards({ title, link })
  props.addPlaceSetVisible(false)
} 


  return (
  <div>
<section className={props.activeAddPlace ? styles.active : styles.popup} onClick={()=>props.addPlaceSetVisible(false)}>
<div className={styles.overlay}>
<div className={styles.container} onClick={e=>e.stopPropagation()}>
<form action="#" name={props.name} onSubmit={handleAddPlaceSubmit} className={`form form_${props.name}`} noValidate > 
<button className={styles.btnClose} type="button" onClick={()=>props.addPlaceSetVisible(false)} />
<h3 className={styles.form__name}>Новое место</h3>
<input className={styles.form__info} onChange={changeTitle} type="url" name='title' placeholder="Название" required minLength={2} maxLength={40}/>
<span className={styles.form__input_type_error} id="name-error"></span>
<input className={styles.form__info} onChange={changeLink}  type="url" name='link' placeholder="Введите ссылку" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="job-error"></span>
<button className={styles.form__btnSave} type='submit'>Создать</button>
</form>
</div></div>
</section>

<section className={props.activeAvatar ? styles.active : styles.popup} onClick={()=>props.avatarSetVisible(false)}>
<div className={styles.overlay}>
<div className={styles.container} onClick={e=>e.stopPropagation()}>
<form action="#" onSubmit={handleSubmitAvatar} name={props.name} className={`form form_${props.name}`} noValidate > 
<button className={styles.btnClose} type="button" onClick={()=>props.avatarSetVisible(false)} />
<h3 className={styles.form__name}>Обновить аватар</h3>
<input className={styles.form__info} ref={avatarRef} type="url" name='avatar' placeholder="Введите ссылку на картинку" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="name-error"></span>
<button className={styles.form__btnSave} type='submit'>Сохранить</button>
</form>
</div></div>
</section>

<section className={props.activeProfile ? styles.active : styles.popup} onClick={()=>props.profileSetVisible(false)}>
<div className={styles.overlay}>
<div className={styles.container} onClick={e=>e.stopPropagation()}>
<form action="#" onSubmit={handleSubmit} className={`form form_${props.name}`} noValidate > 
<button className={styles.btnClose} type="button" onClick={()=>props.profileSetVisible(false)} />
<h3 className={styles.form__name}> Редактировать профиль </h3>
<input className={styles.form__info} onChange={changeName} value={name || ""}   type="text" name='name' placeholder="Введите имя" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="name-error"></span>
<input className={styles.form__info} onChange={changeDescription} value={description || ""}  type="text" name='info' placeholder="Введите род вашей деятельности" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="job-error"></span>
<button className={styles.form__btnSave} type='submit'>Сохранить</button>
</form>
</div></div>
</section>











    </div>
  );
}

export default Popup;
