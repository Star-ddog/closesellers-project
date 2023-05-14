import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Navbarr from './components/Navbarr';
import ClosesellerTv from './pages/ClosesellerTv';
import Closesellerprint from './pages/Closesellerprint';
import Contact from './pages/Contact';
import Upbar from './pages/Upbar';
import WebServices from './pages/WebServices';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbarr/>

    <Routes>

    <Route path="/" element={<Upbar/>}/>
    <Route path="/closesellerTv" element={<ClosesellerTv/>}/>
    <Route path="/closesellerPrint" element={<Closesellerprint/>}/>
    <Route path="/webService" element={<WebServices/>}/>
    <Route path="/contact" element={<Contact/>}/>
     
    </Routes>
    </Router>
     
    </div>
  );
}

export default App;
