import React from 'react';
import './App.css';
import {Home} from "./components/home/Home";
import {ClassicHeader} from "./components/header/ClassicHeader";
import {About} from "./components/about/About";
import {Services} from "./components/service/Services";

function App() {
  return (
    <div className="App">
        <div id='content' role='main'>
            <ClassicHeader/>
            <Home/>
            <About/>
            <Services/>
        </div>


    </div>
  );
}

export default App;
