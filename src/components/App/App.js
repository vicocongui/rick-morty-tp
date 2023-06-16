import React, { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import Form from '../Form/Form';
/*import {Element} from 'react-scroll';*/

const App = () => {
  /*use state tiene que estar arriba de los componentes*/
  const [title, setTitle] = useState('mi titulo');

  const handleChangeTitle = (paramTitle) => {
    console.log('new title', paramTitle);
    setTitle(paramTitle)
  };
  return (
    <div className='App'>
      
      <Header />
      <Hero />
      <CardsContainer />
      <Form />
      <Footer />
     
    </div>
      
      
  );
};

export default App;
