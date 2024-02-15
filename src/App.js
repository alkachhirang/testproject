import './App.css';
import React, { useState, useEffect } from 'react';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import Header from './components/Header';
import Mission from './components/Mission';
import Nobel from './components/Nobel';
import Service from './components/Service';
import Vision from './components/Vision';
import Backtotop from './assets/images/png/back-to-top.png';
import JoinSection from './components/JoinSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Mission />
        <Vision />
        <Service />
        <Nobel />
        <JoinSection/>
        <Consultation />
        <Footer />
      </div>
      <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_5px_16px_rgba(142,198,39,1)] overflow-hidden fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] bg-gradient-to-br from-[#77B000] to-[#00D863] cursor-pointer transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
        <img src={Backtotop} alt='Backtotop' />
      </div>
    </>
  );
}

export default App;
