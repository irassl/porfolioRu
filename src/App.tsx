import React from 'react';
import './App.css';
import {Home} from "./components/home/Home";
import {ClassicHeader} from "./components/header/ClassicHeader";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from "./components/porfolio/Portfolio";
import {Resume} from "./components/resume/Resume";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <div id='content' role='main'>
                <ClassicHeader/>
                <Home/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Resume/>
                <Contact/>
            </div>
            <Footer/>

        </div>
    );
}

export default App;
