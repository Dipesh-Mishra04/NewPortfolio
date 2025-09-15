import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Education from './components/EdQal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
function App() {
  return (
    <div className="min-h-screen bg-classy-gradient bg-fixed animate-fadeInUp">
      {/* Navbar */}
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Skills/>
      <Project />
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
