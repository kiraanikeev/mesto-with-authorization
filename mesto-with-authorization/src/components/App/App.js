import React from "react";
import {Route, Switch} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import '../../fonts/inter.css'; 
import styles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import { api } from "../Api/Api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Register from '../Register/Register';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";


function App() {

  const [profileVisible, profileSetVisible] = useState(false);
  const [addPlaceVisible, addPlaceSetVisible] = useState(false);
  const [avatarVisible, avatarSetVisible] = useState(false);
  const [visibleCard, cardPictureCloseVisible] = useState(false);
  const [selectedCard, cardPictureSet] = useState(null);
  const [currentUser, setCurrentUser] = useState('')



  const handleAvatarClick = () => {
    avatarSetVisible(true);
  };
  const handleProfileClick = () => {
    profileSetVisible(true);
  };
  const handleAddPlaceClick = () => {
    addPlaceSetVisible(true);
  };
  const handleCardClick = (card) => {
    cardPictureSet(card);
    cardPictureCloseVisible(true)
  };

  useEffect(()=>{
    api.getUserInfo()
    .then((res)=>{
      setCurrentUser(res)
    })
    .catch((err) => { 
      console.log(`Не удалось получить данные пользователя ${err}`); 
  })
  },[]); 

  function handleUpdateUser({ name, about }) { 
    api.changeInfo({ name, about }) 
    .then((res) => { 
     setCurrentUser(res);  
      }) 
      .catch((err) => {
        console.log(`Не удалось редактировать данные пользователя ${err}`); 
      }); 
  } 
  function handleUpdateAvatar(avatar){
api.changeAvatar(avatar)
.then((res)=>{
  setCurrentUser(res);  
}) 
.catch((err) => {
  console.log(`Не удалось редактировать данные пользователя ${err}`); 
}); 
} 






const[cardsArray, setCardsArray]=useState([])


useEffect(() => { 

  api.getCards()
  .then((res)=>{
    setCardsArray(res)
    })
    .catch((err) => { 
      console.log(`К сожалению произошла ошибка ${err}`); 
    }); 
  }, []); 

  function handleCardLike (card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
{ !isLiked 
   ? api.makeLike(card._id)
    .then((newCard) => {
  
      setCardsArray((state) => 
      state.map((CardWithLike) => CardWithLike._id === card._id ? newCard : CardWithLike))})
     .catch((err) => { 
           console.log( 
 `Не удалось постаить лайк картинке. Попробуйте позже ${err}` 
 ); 
 })
    : api.deleteLike(card._id)
    .then((newCard) => {
      setCardsArray((state) => 
      state.map((CardWithLike) => CardWithLike._id === card._id ? newCard : CardWithLike))})
     .catch((err) => { 
           console.log( 
 `Не удалось постаить лайк картинке. Попробуйте позже ${err}` 
 ); 
 })}}

  function handleCardDelete(card){

api.deleteCards(card._id)
.then(()=>{
  setCardsArray((state) => 
  state.filter((element)=>element._id === card._id ? card.remove : element))})
.catch((err) => { 
  console.log(`Не удалось удалить картинку ${err}`); 
}); 
  }


  function handelSetCards({ title, link }) {
    api.addCardsPost({ title, link })
    .then((res)=>{
      setCardsArray([res, ...cardsArray])})
     .catch((err) => { 
        console.log(`Не удалось загрузить картинку ${err}`); 
      }); 
        }

  return (
<div className={styles.page}>
<CurrentUserContext.Provider value={currentUser}>
<Popup 
activeProfile={profileVisible} profileSetVisible={profileSetVisible}
activeAddPlace={addPlaceVisible} addPlaceSetVisible={addPlaceSetVisible}
activeAvatar={avatarVisible} avatarSetVisible={avatarSetVisible}
handleUpdateUser={handleUpdateUser} onUpdateAvatar={handleUpdateAvatar}
handelSetCards={handelSetCards}
> 
</Popup>
{selectedCard &&
<ImagePopup
visibleCard={visibleCard} cardPictureCloseVisible={cardPictureCloseVisible}
selectedCard={selectedCard} cardPictureSet={cardPictureSet} />}

<Header />
<Switch>
<Route path='/signup'>
<Register
name="register"
/>
</Route>
<Route path='/signin'>
  <Login/>
</Route>
<ProtectedRoute
exact path="/"
component={Main}
handleAvatarClick={handleAvatarClick}
handleProfileClick={handleProfileClick}
handleAddPlaceClick={handleAddPlaceClick}
handleCardClick={handleCardClick}
cardsArray={cardsArray}
handleCardDelete={handleCardDelete}
handleCardLike={handleCardLike} />

{/* <Main

/> */}
<Footer />
</Switch>
</CurrentUserContext.Provider>
    </div>
  );
}

export default App;
