import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BoxSwitch from "./pages/BoxSwitch";
import IconSwitch from "./pages/IconSwitch";


function App() {

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boxswitch" element={<BoxSwitch />} />
          <Route path="/iconswitch" element={<IconSwitch />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
