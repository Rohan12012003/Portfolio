import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Travlo from "./Travlo";
import AllComponents from "./AllComponents"
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/Travlo" element={<Travlo />} />
      <Route path="/" element={<AllComponents />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
    
  );
}

export default App;
