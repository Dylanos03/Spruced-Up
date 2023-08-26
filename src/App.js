import "./App.css";
import {
  Navbar,
  Hero,
  About,
  Why,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from "./Components/index.js";

function App() {
  return (
    <div className="App overflow-hidden box-border m-0">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
