import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/index.js'
import { Home } from './components/Home/index.js'
import Location from './components/Location/Location'
import Policy from './components/Policy/Policy'


const App = () => {
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
