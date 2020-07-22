import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomeCarousel from './components/HomeCarousel'
import {Container,Row,Col} from 'react-bootstrap';
import HomeAbout from './components/HomeAbout';

function App() {
  return (
   
    <div className="App">
        <Row sm={2}>
          <Navigation/>
        </Row>
        
        <HomeCarousel/>
        
        <HomeAbout/>

        <Footer/>
    </div>
  );
}

export default App;
