import React from 'react';

import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import FormExample from './pages/FormExample';

function App() {
  return (
    // <Router>
    //   <Routes >
    //     <Route  path="/" element={<MainPage/>}/>
    //     <Route path="/about" element={<AboutPage />} />
    //     <Route path="/contact" element={<ContactPage />} />
    //     <Route path="/form" element={<FormExample />} />

    //     <Route path='*' element={<ErrorPage />} />
        
        
    //   </Routes >
    // </Router>

    <div>
      <h1> Main Page </h1>
    </div>
  );
}

export default App;