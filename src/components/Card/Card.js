import React from 'react'
import Buttom from '../Button/Buttom'
import Style from './Card.module.css'

const Card = ({title, text, url}) => {
  return (
    <div className={Style.div}>
      <li className= {Style.carta}>
        <img className={Style.img}>{url}</img>
        <h3 className={Style.title}>{title}</h3>
        <p className={Style.txt}>{text}</p>
        <Buttom></Buttom>
      </li>
      <li className= {Style.carta}>
        <img className={Style.img}>{url}</img>
        <h3 className={Style.title}>{title}</h3>
        <p className={Style.txt}>{text}</p>
        <Buttom></Buttom>
      </li>
      <li className= {Style.carta}>
        <img className={Style.img}>{url}</img>
        <h3 className={Style.title}>{title}</h3>
        <p className={Style.txt}>{text}</p>
        <Buttom></Buttom>
      </li>
    </div>
  )
}

export default Card