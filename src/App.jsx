import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chesscom from "./pages/Chesscom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Lichess from "./pages/Lichess";

const App = () => {
  return (
    <div className="min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lichessid" element={<Lichess />} />
          <Route path="/chesscomid" element={<Chesscom />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
