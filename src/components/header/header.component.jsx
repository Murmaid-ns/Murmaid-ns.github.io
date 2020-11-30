import React from "react";
import './header.style.scss';
import MyPhoto from './photo.jpeg'
import Particles from "react-tsparticles";

const Header = () => {
   const styles = {
       position: "fixed",
   }
    return (
        <div>
            <Particles style={styles}
                       id="tsparticles"
                       options={{
                           background: {
                               
                               color: "#000000"
                           },
                           detectRetina: true,
                           fpsLimit: 60,
                           interactivity: {
                               detectsOn: "canvas",
                               events: {
                                   resize: true
                               }
                           },
                           particles: {
                               color: {
                                   value: "#fff"
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       area: 1080
                                   },
                                   limit: 0,
                                   value: 400
                               },
                               opacity: {
                                   animation: {
                                       enable: true,
                                       minimumValue: 0.1,
                                       speed: 0.25,
                                       sync: false
                                   },
                                   random: {
                                       enable: true,
                                       minimumValue: 0.1
                                   },
                                   value: 1
                               },
                               move:{
                                   enable: true,
                               },
                               shape: {
                                   type: "circle"
                               },

                               size: {
                                   random: {
                                       enable: true,
                                       minimumValue: 0.5
                                   },
                                   value: 3
                               }
                           }
                       }}
            />
            <header>
                <div className='ball' style={{backgroundImage: `url(${MyPhoto})`}}/>
                <div className='name-surname'>
                    <h1>Nidilko Viacheslav</h1>
                    <h2>Junior Front-end developer</h2>
                </div>
            </header>
        </div>
    )
}
export default Header;