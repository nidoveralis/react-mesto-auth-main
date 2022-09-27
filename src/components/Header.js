import Logo from '../images/header__logo.svg';
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

function Header(props) {
  
  return(
    <header className="header">
      <img src={Logo} alt="Логотип" className="header__logo" />
      <div className='header__message'>
        <Switch>
          <Route path='/signup'>
            <Link to='/signin' className="login__sing-in header__title">Вход</Link>
          </Route>
          <Route path='/signin'>
            <Link to='/signup' className="login__sing-in header__title">Регистрация</Link>
          </Route>
          <Route path='/'>
            <p className="header__title">{props.message}</p>
            <button className="login__sing-in header__title" onClick={props.onSingOut}>Выход</button>
          </Route>
        </Switch>
      </div>
    </header>
  )
};

export default Header;