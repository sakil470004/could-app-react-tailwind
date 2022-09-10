import './App.css';
import About from './components/About';
import AllInOne from './components/AllInOne';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <AllInOne/>

    </>
  );
}

export default App;
