import React from 'react'
import Style from './Card.module.css'



const Card = ({title, txt, url}) => {
  return (
      <article className={Style.card_wrapper}>
        <img className={Style.img} src={url} alt={title}/>
        <div className= {Style.div_content}>
        <h3 className={Style.title}>{title}</h3>
        <p className={Style.txt}>{txt}</p>
        <button>a</button>
        </div>
      </article>
  )
}

export default Card