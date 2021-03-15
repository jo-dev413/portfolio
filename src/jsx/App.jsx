import logo from '../img/logo.svg';
import '../style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Work' component={Work} />
          <Route path='/Contact' component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
