import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
      <div className="divider" />
      <About/>
      <div className="divider" />
      <Works/>
      <div className="divider" />
      <Services/>
      <div className="divider" />
      <Contact/>
      <div className="divider" /> 
      <Footer/>     
     
    </div>
  );
}

export default App;
