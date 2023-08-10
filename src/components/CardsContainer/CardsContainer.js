import React from 'react'
import Card from '../Card/Card'
import Style from './CardsContainer.module.css'

const data = [
  {
    title: 'Rick Sánchez',
    url: '/assets/img/rick.jpg',
    txt: {
      uno:
        'El abuelo',
      dos:
      '',
    },
  },
  {
    title: 'Morty Smith',
    url: '/assets/img/morty.jpg',
    txt: {
      uno:
        'El nieto',
      dos:
      '',
    },
  },
  {
    title: 'Mr poopybutthole',
    url: '/assets/img/mr.jpg',
    txt: {
      uno:
        'Solo Mr poopybutthole',
      dos:
      '',
    },
  },
];

const CardsContainer = () => {
  return ( 
  <section className={Style.card_wrapper}>
    {data.map(({title, txt, url}) => (
      <Card title={title} txt={txt.uno} url={url} />
    ))}
  </section>
  );
};

export default CardsContainer;