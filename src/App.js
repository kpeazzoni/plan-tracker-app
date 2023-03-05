// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Hero from './components/Hero/Hero';
// import Join from './components/Join/Join';
import HomepageContainer from './components/pages/HomepageContainer'

function App() {
  return (
     <div className="">
      {/* <Hero/>
      <Join/> */}
      <Header />
      <HomepageContainer />
      <Footer/>

    </div>
  );
  // return <HomepageContainer/>
}

export default App;
