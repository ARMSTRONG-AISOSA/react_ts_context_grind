import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import BoxSwitch from "./pages/BoxSwitch";
import CounterPage from "./pages/CounterPage";
import Profile from "./pages/Profile";


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <main className="flex-grow flex flex-col" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boxswitch" element={<BoxSwitch />} />
          <Route path="/counterpage" element={<CounterPage />} />
          <Route path="/profilepage" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
