import Header from "./components/Header";
import Hero from "./components/Hero";

import Gallery from "./components/Gallery";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="transition-colors duration-500">
      <Header />
      <DarkModeToggle />
      <Hero />  
      <Gallery />
      
    </div>
  );
}

export default App;