import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Apropos from "./components/Apropos";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="transition-colors duration-500">
      <Header />
      <DarkModeToggle />
      <Hero /> 
      <Apropos /> 
      <Gallery />
      <Service />
      <Contact />
      <Footer />


      
    </div>
  );
}

export default App;