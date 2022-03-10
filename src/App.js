import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Contact from './ui/views/Contact';
import Header from './ui/components/Header/index';
import Footer from './ui/components/Footer/index';
import ErrorPage from './ui/views/ErrorPage';
import Home from './ui/views/Home';


function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/contact" element = {< Contact / >}/>
        <Route path = "*" element = {<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;