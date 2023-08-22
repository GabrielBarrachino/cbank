import React from 'react';
import './Styles/css/main.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>
      <Header />
      
      <Home />
      <main className='container'>
      </main>
    </>
  )
}

export default App;
