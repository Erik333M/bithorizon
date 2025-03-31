import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CoinPage from './components/coinPage/CoinPage';
import AboutUs from './components/AboutUs/AboutUs';
import Registration from './components/Registration/Registration.jsx';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/coin/:id' element={<CoinPage/>} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
