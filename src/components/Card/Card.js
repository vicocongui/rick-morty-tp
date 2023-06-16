import React from 'react'
import Buttom from '../Button/Buttom'
import Style from './Card.module.css'



const Card = ({title, txt, url}) => {
  return (
      <article className={'col_4 ${Style.card_wrapper}'}>
        <img className={Style.img} src={url} alt={title}/>
        <h3 className={Style.title}>{title}</h3>
        <p className={Style.txt}>{txt}</p>
        <Buttom url={url.original}/>
      </article>
  )
}

export default Card