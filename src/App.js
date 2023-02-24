import Home from './components/Home.js'
import { BrowserRouter as Router, Routes, Route, Links } from 'react-router-dom';
import Navbar from './components/Navbar'
import Rates from './components/Rates'
import Gallery from './components/Gallery'

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='pageBody'>
          <Routes>
            <Route exact path='/' element=<Home /> />
            <Route exact path='/rates' element=<Rates /> />
            <Route exact path='/gallery' element=<Gallery /> />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
