import React from 'react'
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
    <nav className={style.nav}>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </nav>
  </footer>
  )
}

export default Footer