import React, {useState, useEffect} from 'react';

function Home({offSetY}) {

  return (
    <section id="home" className="home">
        <main>
            <article style={{transform: `translateY(${offSetY * 0.2}px)`}}>
                <h1>Olá meu Caro!</h1>
                <h2>bem vindo ao meu <span>cafofo!</span></h2>
                <p>Já que você está aqui, vamos nos <br /> conhecer um pouquinho!</p>
                <a href="#about" className="anc-btn">Eu começo!</a>
            </article>
        </main>
    </section>
  );
}

export default Home;
