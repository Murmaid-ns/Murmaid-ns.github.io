import React from "react";
import './projects.style.scss';
import Fade from 'react-reveal/Fade';
import img1 from "./react_shop.png";

const Projects = () => {
  return (
    <div id='projects'>
      <div className="project-block">
        <h1>Projects</h1>
      <div>
        <Fade left big>
          <img className='project-screenshot' alt='1' src={img1}/>
          <h2>React shop - SPA</h2>
        </Fade>
      </div>
      </div>
    </div>
  )
}
export default Projects;
