import React from 'react'
import style from './Form.module.css'

const Hero = () => {
  return (
    <div className={style.container}>
      <h2 className={style.txt}>Suscribite:</h2>

      <form className={style.form_container}>
        <input className={style.input}></input>
        <button className={style.boton}>Suscribite</button>
      </form>
      
      
    </div>
  )
}

export default Hero