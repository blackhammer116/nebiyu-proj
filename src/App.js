import React from "react";
import Landing from "./Homepage/Landing/Landing";
import About0 from "./Homepage/About_Section/About0";
import Separator from "./Homepage/SecSep/Separator";
import Services from "./Homepage/Services/Services";
import Footer from "./Homepage/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <About0 />
      <Separator />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
