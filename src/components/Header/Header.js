import React from 'react';
import style from './Header.module.css';

const Header = () => {
  
  return <header className={style.header_container}>
    <h1 className={style.logo}>
      SH
    </h1>
    <nav>
      <ul>
        <li><a src= "#home">Home</a></li>
        <li><a src= "#home">Card</a></li>
        <li><a src= "#home">Suscribite</a></li>
        <li><a src= "#home">Footer</a></li>
      </ul>
    </nav>
  </header>;
};


export default Header;
