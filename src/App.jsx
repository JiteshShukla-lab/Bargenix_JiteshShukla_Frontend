import "./App.css";
import Navbar from "./assets/helpers/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/helpers/Home";
import About from "./assets/helpers/About Us";
import Features from "./assets/helpers/Features";
import Pricing from "./assets/helpers/Pricing";
import Footer from './/assets/helpers/footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <About />
                <Features />
                <Pricing />
                <Footer />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/Features"
            element={
              <>
                <Navbar />
                <Features />
                <Footer />
              </>
            }
          />
          <Route
            path="/Pricing"
            element={
              <>
                <Navbar />
                <Pricing />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
