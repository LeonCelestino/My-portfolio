import React, {useState, useEffect} from 'react';
import { FaJs, FaReact, FaSass, FaFigma } from 'react-icons/fa';
import project1 from '../assets/scss/css/images/project1.jfif'
function Projects() {

  return (
    <section id="projects" className="projects">
        <main>
             <div className="projects-box">
                <h2>Se liga nos meus projetos: </h2>
                <div className="project-slider">
                    <img src={project1} alt="project1" />
                    <div className="buttons-box">
                      <a className="repo-button" href="https://github.com/LeonCelestino/interactive-card-challenge" target="_blank" rel="noreferrer">Repositório</a>
                      <a className="live-button" href="https://leoncelestino.github.io/interactive-card-challenge/" target="_blank" rel="noreferrer">Live Site</a>
                    </div>
                </div>
             </div>

             <div className="skills-box">
                <h2>E eu conto com essas ferramentas: </h2>
                <div className="tech-box tech-1">
                   <div className="flex-row">
                      <FaJs />
                      <div className="flex-column">
                        <h4>Javascript</h4>
                        <p>expêriencia: mediana</p>
                      </div>
                   </div>
                </div>
                <div className="tech-box tech-2">
                   <div className="flex-row">
                      <FaReact />
                      <div className="flex-column">
                        <h4>ReactJs</h4>
                        <p>expêriencia: mediana</p>
                      </div>
                   </div>
                </div>
                <div className="tech-box tech-3">
                  <div className="flex-row">
                      <FaSass />
                      <div className="flex-column">
                        <h4>Sass</h4>
                        <p>expêriencia: mediana</p>
                      </div>
                   </div>
                   
                </div>
                <div className="tech-box tech-4">
                   <div className="flex-row">
                      <FaFigma />
                      <div className="flex-column">
                        <h4>Figma</h4>
                        <p>expêriencia: mediana</p>
                      </div>
                   </div>
                   
                </div>
             </div>
           
        </main>
    </section>
  );
}

export default Projects;
