import Home from './components/Home.js'
import { BrowserRouter as Router, Routes, Route, Links } from 'react-router-dom';
import Navbar from './components/Navbar'
import Rates from './components/Rates'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='pageBody'>
          <Routes>
            <Route exact path='/' element=<Home /> />
            <Route exact path='/rates' element=<Rates /> />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
