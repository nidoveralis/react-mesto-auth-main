import {Link} from 'react-router-dom';

function Register() {
  return(
    <div className="login">
      <form className="login__form">
        <h2 className="login__title">Регистрация</h2>
        <fieldset className="login__field">
          <input type='text' className="login__input" name="mail" placeholder="Email" />
        </fieldset>
        <fieldset className="login__field">
        <input type='text' className="login__input" name="parol" placeholder="Пароль" />
        </fieldset>
      </form>
      <div className="login__buttons">
        <button className="login__button">Зарегистрироваться</button>
        <Link to="/sing-in" className="login__sing-in">Уже зарегистрированы? Войти</Link>
      </div>
    </div>
  )
};
export default Register;