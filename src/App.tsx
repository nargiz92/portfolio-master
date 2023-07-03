import React from 'react';
import './App.css';
import Header from "./c1-header/Header";
import Main from "./c3-main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footers from "./footer/Footers";
import {OverAllMainPage} from "./c2-greetings/OverAllMainPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <OverAllMainPage/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footers/>
        </div>
    );
}

export default App;
