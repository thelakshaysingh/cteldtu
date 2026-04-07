import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programmes from './pages/Programmes';
import ProgrammeDetail from './pages/ProgrammeDetail';
import MessageVC from './pages/MessageVC';
import MessageDean from './pages/MessageDean';
import Contact from './pages/Contact';
import './index.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="programme/:id" element={<ProgrammeDetail />} />
            <Route path="message-vc" element={<MessageVC />} />
            <Route path="message-dean" element={<MessageDean />} />
            <Route path="contact" element={<Contact />} />
            <Route path="company/:id" element={<About />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;