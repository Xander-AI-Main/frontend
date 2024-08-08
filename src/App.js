import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Services from './components/Services';
import Prices from './components/Prices';
import Quotes from './components/Quotes';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Platform from './components/Platform';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import TnC from './components/TnC';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Platform />}/>
          <Route path='/contactus' element={<ContactUs />}/>
          <Route path='/tnc' element={<TnC />}/>
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
