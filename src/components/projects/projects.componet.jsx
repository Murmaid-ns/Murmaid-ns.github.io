import React from "react";
import './projects.style.scss';
import Fade from 'react-reveal/Fade';
import reactShop from "./react_shop.png";
import newsPortal from "./news-portal.png";
import monsterFactory from "./monster_factory.png";
import todoReact from "./todoReact.png"

const Projects = () => {
  return (
    <div id='projects'>
      <div className="container">
        <Fade>
          <h1>Projects</h1>
        </Fade>
        <div className="project-block">
          <Fade left big>
            <div className='project'>
              <img className='project-screenshot' alt='1' src={reactShop}/>
              <h2>React shop - SPA</h2>
              <a href="https://murmaid-ns.github.io/Shop-react-SPA/">Link</a>
            </div>
          </Fade>
          <Fade left big>
            <div className='project'>
              <img className='project-screenshot' alt='2' src={newsPortal}/>
              <h2>News Portal</h2>
              <a href='https://murmaid-ns.github.io/news-portal/'>Link</a>
            </div>
          </Fade>
          <Fade right big>
            <div className='project'>
              <img className='project-screenshot' alt='3' src={monsterFactory}/>
              <h2>Monster Factory on React</h2>
              <a href='https://codesandbox.io/s/strange-stonebraker-qbfbq?file=/src/App.js'>Link to sandbox</a>
            </div>
          </Fade>
          <Fade right big>
            <div className='project'>
              <img className='project-screenshot' alt='4' src={todoReact}/>
              <h2>Primitive ToDo list on React</h2>
              <a href='https://codesandbox.io/s/funny-austin-3yc1d?file=/src/App.js'>Link to sandbox</a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
export default Projects;
