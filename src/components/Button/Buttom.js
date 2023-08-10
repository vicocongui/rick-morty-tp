import React from 'react';
import Style from './Buttom.module.css';


const Buttom = () => {
  return (
    <a href="https://google.com" target="blank" className={Style.btn}>
      Ver mas
    </a>
  );
};

export default Buttom