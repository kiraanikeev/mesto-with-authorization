import styles from "./Register.module.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
function Register (props){

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    
function submitRegistration(e){
    e.preventDefault(); 
    props.heandelRegistration({email, password})
}
function changeEmail(e){
let email = e.target.value
setEmail(email)
}
function changePassword(e){
    let password = e.target.value
    setPassword(password)
}

    return(
<section className={styles.container}>


<form action="#" name={props.name} onSubmit={submitRegistration} className={styles.registration} noValidate > 
<h3 className={styles.heading}>Регистрация</h3>
<input className={styles.form__info} onChange={changeEmail} type="email" name='' placeholder="Email" required minLength={2} maxLength={40}/>
<span className={styles.form__input_type_error} id=""></span>
<input className={styles.form__info} onChange={changePassword}  type="password" name='' placeholder="Пароль" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id=""></span>
<button className={styles.form__btn} type='submit'>Зарегистрироваться</button>
<p className={styles.link_p}><NavLink to ='/signin' className={styles.link}>Уже зарагистрированы? Войти</NavLink></p>
</form>
</section>
    )
}

export default Register;
