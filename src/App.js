import React,{ component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/navbar';
import Index from './component/index';
import Contact from './component/contact/contact';
import { Component } from 'react';


class App extends Component{
  render(){
      return(
<>      

        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/Contact' element={ <Contact />} />
        </Routes>
        </BrowserRouter>
        
        
</>
      )
  }
}

export default App;
