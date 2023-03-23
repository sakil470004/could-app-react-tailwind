import './App.css';
import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Priceing from './components/Priceing';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AllInOne />
      <Priceing />
      <Footer/>

    </>
  );
}

export default App;
