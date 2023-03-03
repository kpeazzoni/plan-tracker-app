import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import HomepageContainer from './components/pages/CardsContainer'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
