import React from 'react'
import Card from '../Card/Card'
import Style from './CardsContainer.module.css'

const CardsContainer = () => {

  return (
    <ul className={Style.ul}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </ul>
  )
}

export default CardsContainer