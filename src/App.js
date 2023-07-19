import { BrowserRouter as Router, Route, Routes, useLocation,  } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

import {useLayoutEffect} from 'react';

import Navbarr from './components/Navbarr';
import ClosesellerTv from './pages/ClosesellerTv';
import Closesellerprint from './pages/Closesellerprint';
import Contact from './pages/Contact';
import Upbar from './pages/Upbar';
import WebServices from './pages/WebServices';
import WhyTv from "./pages/WhyTv";

function App() {
  useEffect(function () {
    Aos.init({ duration: 2000,
    mirror:'false',
 });
  }, []);

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  
  return (
    <div className="App">
    <Router>
      <Wrapper>
    <Navbarr/>

    <Routes>

    <Route path="/" element={<Upbar/>}/>
    <Route path="/closesellerTv" element={<ClosesellerTv/>}/>
    <Route path="/closesellerPrint" element={<Closesellerprint/>}/>
    <Route path="/webService" element={<WebServices/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/whytv" element={<WhyTv/>}/>
     
    </Routes>
    </Wrapper>
    </Router>
     
    </div>
  );
}

export default App;
