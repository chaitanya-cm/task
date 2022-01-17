import react from 'react';
import './App.css';

import NavBar from './component/Navbar';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Footer from './component/Footer';
import firebase from './Backend/firebase';

function App() {
  return (
    <div className='page-container'>
    <div className='content-wrap'>
    <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={ <Home />} ></Route>
          <Route path='/reports' element={<Reports />} ></Route>
          <Route path='/products' element={ <Products />} ></Route>
        </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
