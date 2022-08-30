import emailjs from 'emailjs-com';
import React, {useState, useEffect, useRef} from 'react';
import './assets/scss/css/index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {  
  const [offSetY, setOffSetY] = useState(0);
  const [scroll, setScroll] = useState(false);
  const handleScroll = ()=>setOffSetY(window.pageYOffset);

  useEffect(()=> {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  useEffect(()=>{
    window.addEventListener("scroll", ()=> setScroll(window.scrollY > 10))
  }, [])

  return (
    <>
      <Header />
      <Home offSetY={offSetY} scroll={scroll}/>
      <About /> 
      <Projects />
      <Contact />
    </>
  );
}

export default App;
