import './App.css';
import React from 'react';

import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


const App = () => {

  return (
    <div className='wrapper'>
      <Header />
      <div className='wrapper-content '>
        <div className='wrapper-content__container container'>
          <Aside />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  )

}






export default App;
