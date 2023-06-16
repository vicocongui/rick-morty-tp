import React from 'react'
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer_container}>
      <ul>
        <li><a src= "#home">Home</a></li>
        <li><a src= "#home">Card</a></li>
        <li><a src= "#home">Suscribite</a></li>
      </ul>
    </footer>
  )
}

export default Footer