import React from 'react';
import Style from './Buttom.module.css';

 const data = [
  {
    link: {
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/357/892608.jpg',
    },
  },
  {
    link: {
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/81/204978.jpg',
    },
  },
  {
    link: {
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/168/420526.jpg',
    },
  },
]; 

const Buttom = () => {
  return (
    <a href="https://google.com" target="blank" className={Style.btn}>
      Ver mas
    </a>
  );
};

export default Buttom