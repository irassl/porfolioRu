import React, {useEffect, useState} from 'react';
import './App.scss';
import {Home} from "./components/home/Home";
import {ClassicHeader} from "./components/header/ClassicHeader";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from "./components/porfolio/Portfolio";
import {Resume} from "./components/resume/Resume";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";

function App() {
    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    useEffect(() => {
        const checkScrollTop = () => {
            let scrollTopBtn = document.getElementById("back-to-top");

            if (scrollTopBtn) {
                if (
                    document.body.scrollTop > 400 ||
                    document.documentElement.scrollTop > 400
                ) {
                    setScrollTopVisible(true);
                } else {
                    setScrollTopVisible(false);
                }
            }
        };
        window.addEventListener("scroll", checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, [])


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
            <span
                id="back-to-top"
                className="backToTop"
                style={{display: scrollTopVisible ? "inline" : "none"}}
                onClick={() => {
                    window.scrollTo({top: 0, behavior: "smooth"});
                }}
            >
            <i className="fa fa-chevron-up"></i>
          </span>

        </div>
    );
}

export default App;
