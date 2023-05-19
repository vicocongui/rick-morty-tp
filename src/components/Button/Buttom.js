import React from 'react';
import Style from './Buttom.module.css';

const Buttom = ({btn_title, btn_link}) => {
  return (
    <div>
      <a href={btn_link} className={Style.btn}>{btn_title}</a>
    </div>
  )
}

export default Buttom