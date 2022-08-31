import React, {useState, useEffect, useRef} from 'react';
import {FaGithub, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa';
function About() {

  return (
    <section id="about" className="about"> 
      <aside>
        <a href="https://www.github.com/LeonCelestino" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/LeonCelestino" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/tecnologia_e_linda/" target='_blank' rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.youtube.com/channel/UCA2Zan5PfDlGUapgmMatf9Q" target='_blank' rel="noreferrer"><FaYoutube /></a>
      </aside> 
      <main>
        <article>
            <h2>Por onde eu começo...</h2>
            <p>Há tanta coisa que eu quero falar, mas para deixar curto vou direto ao ponto.</p>
            <p>Atuo como Front End Developer, e sou apaixonado por tecnologia e por design.</p>
            <p>Gosto de produzir sites por conta própria e desejo me profissionalizar na área e evoluir cada vez mais, por isso, estou sempre em busca de novos desafios!</p>
            <a href="#projects">Olha o que faço!</a>
            <a href="./files/curriculo.pdf" className="download-cv" download>Baixe meu CV!</a>
        </article>
      </main>
    </section>
  ); 
}

export default About;
