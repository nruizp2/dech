import './App.css';
import Banner from './components/banner';
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import Home from './components/home';
import Services from './components/services';
import { Box } from '@mui/material';
import Footer from './components/footer';
import Contact from './components/contact';
import Projects from './components/projects';
import Us from './components/us';
import RouteError from './components/routeError';

function AppContent({setLocale}) {
  const location = useLocation(); 
  const [animationKey, setAnimationKey] = useState(0);

  const [show, setShow] = useState(false);

  const falseShow = () => setShow(false)

  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, [location]); 

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => {
      setShow(true);  
    }, 100);  

    return () => clearTimeout(timer); 
  }, [location]);


  useEffect(() => {
    requestAnimationFrame(() => {
      setShow(true); })
  }, []);



  return (
    <div style={{flex:'1'}}>
      <Banner f={falseShow}  setLocale={setLocale}/>
      <div className={show? "routes-div": "hidden"} key={animationKey}>
      <Routes>
        <Route path="/" element={<Home f={falseShow}/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/us" element={<Us />} />

        <Route path="*" element={<RouteError/>} />
      </Routes>
    </div>
    <Footer className='footer'/>
    </div>
  );
}

function App({setLocale}) {
  return (
    <HashRouter className="Dech" >
      <Box display={{ xs: 'none', md: 'block' }} sx = {{position: 'fixed', width:'100%', height:'auto'}}>
        <div className='gradient-1-app-md'></div>
        <div className='gradient-2-app-md'></div>      </Box>
      <Box display={{ xs: 'block', md: 'none' }}  sx = {{position: 'fixed', width:'100%', height:'auto'}}>
        <div className='gradient-1-app-xs'></div>
        <div className='gradient-2-app-xs'></div>
      </Box>

      <AppContent setLocale={setLocale}/> 
    </HashRouter>
  );
}

export default App;
