import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Services from './components/Services';
import Prices from './components/Prices';
import Quotes from './components/Quotes';
import OurStory from './components/OurStory';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Main />
      <Services />
      <Prices />
      {/* <Quotes /> */}
      <OurStory />
      <Footer />
    </div>
  );
}

export default App;
