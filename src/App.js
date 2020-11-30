import React from "react";
import Header from "./components/header/header.component";
import AboutMe from "./components/about-me/about-me.component";
import Projects from "./components/projects/projects.componet";
import ContactInfo from "./components/contact-info/contact-info.component";


function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Projects/>
            <ContactInfo/>
        </div>
    );
}

export default App;
