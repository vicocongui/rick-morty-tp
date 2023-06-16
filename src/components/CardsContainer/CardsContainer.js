import React from 'react'
import Card from '../Card/Card'
import Style from './CardsContainer.module.css'

const data = [
  {
    title: 'Reciclá',
    txt: 'Reutilizá tus prendas[...]',
    url: {
      original:
        '/assets/img/card-sostenible.jpg',
    },
  },
  {
    title: 'Nuevas tendencias',
    txt: 'Tendencias que van y vuelven[...]',
    url: {
      original:
        '/assets/img/card-tendencia.jpg',
    },
  },
  {
    title: 'Invierno 2023',
    txt: 'Mirá lo trending toppic de este invierno[...]',
    url: {
      original:
        '/assets/img/card-invierno.jpg',
    },
  },
];

const CardsContainer = () => {
  return ( 
  <section className={Style.card_wrapper}>
    <div className='grid'>
    {data.map(({title, txt, url}) => (
      <Card title={title} txt={txt} url={url.original} />
    ))}
    </div>
  </section>
  );
};

export default CardsContainer;