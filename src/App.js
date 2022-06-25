import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/header/Header';
import Banner from './components/Banner';
import Card from './components/cards/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Banner />
      <Card/>
    </div>
  );
}

export default App;
