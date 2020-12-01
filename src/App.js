import React from "react";
import ReactPageScroller from "react-page-scroller";
import Header from "./components/header/header.component";
import AboutMe from "./components/about-me/about-me.component";
import Projects from "./components/projects/projects.componet";
import ContactInfo from "./components/contact-info/contact-info.component";
import AnimatedBackground from "./components/animated-background/animated-background.component";


function App() {
    return (
        <div className="App">
            <AnimatedBackground/>
            <ReactPageScroller>
                <Header/>
                <AboutMe/>
                <Projects/>
                <ContactInfo/>
            </ReactPageScroller>
        </div>
    );
}

export default App;
