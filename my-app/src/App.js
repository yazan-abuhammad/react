import React from 'react';

import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes >
        <Route  path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='*' element={<ErrorPage />} />
        
        
      </Routes >
    </Router>
  );
}

export default App;