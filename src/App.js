import React, { Component } from 'react';
import './resources/styles.css';

import Header from "./components/header_footer/Header.js";
import Featured from "./components/featured";
import VenueInfo from "./components/venu_info";
import Higlights from "./components/highlights";
import Highligts from './components/highlights';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highligts/> 
      </div>
    );
  }
}

export default App;
