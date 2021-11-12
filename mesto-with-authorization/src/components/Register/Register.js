import styles from "./Register.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
function Register (props){

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    
function submitRegistration(e){
    e.preventDefault(); 
    console.log('registration component email', email)
    console.log('registration component password', password)
    props.handelRegistration(email, password)
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
<input className={styles.form__info} onChange={changeEmail} type="email"  placeholder="Email" required minLength={2} maxLength={40}/>
<span className={styles.form__input_type_error}></span>
<input className={styles.form__info} onChange={changePassword}  type="password"  placeholder="Пароль" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error}></span>
<button className={styles.form__btn} type='submit'>Зарегистрироваться</button>
<p className={styles.link_p}><Link to ='/signin' className={styles.link}>Уже зарагистрированы? Войти</Link></p>
</form>
</section>
    )
}

export default Register;
