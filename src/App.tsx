import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Upload } from './pages/Upload';
import { Database } from './pages/Database';
import { Volunteer } from './pages/Volunteer';
import { About } from './pages/About';
import { Donate } from './pages/Donate';
import { Developer } from './pages/Developer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/database" element={<Database />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;