import React from 'react';
import PopupWithForm from './PopupWithForm';
import errorImg from '../images/popup__error.jpg';
import successImg from '../images/popup__ok.jpg';

function InfoTooltip({ onClose, active, answer}) {
  console.log(answer)
  return(
    <div className={`${ active ? "popup_opened" : ""} popup  popup-picture`}>
      <div className="popup__container">
        <div className='popup__frame'>
          <button className="popup__button-close button" type="button" onClick={onClose}/>
          <img className="popup-info__image" src={`${errorImg}`} />
          <h2 className="popup-info__title">huhuh</h2>
        </div>
      </div>
    </div>
  )
}
export default InfoTooltip;