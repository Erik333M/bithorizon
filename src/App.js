import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer'
import Policy from './components/Policy/Policy'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/aml-policy' element={<Policy/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
