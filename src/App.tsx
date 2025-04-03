import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs } from './components/AboutUs';
import { CoinPage } from './components/coinPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Registration } from './components/Registration';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
