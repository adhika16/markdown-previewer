import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar expand="md" container="fluid" />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element ={<NotFound />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
