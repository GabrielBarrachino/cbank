import React from 'react';
import './Styles/css/main.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Tariffs from './Components/Tariffs/Tariffs';

const App = () => {
  return (
    <>
      <Header />
      
      <Home />
      <main className='container'>
        <Tariffs />
      </main>
    </>
  )
}

export default App;
