// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import EastleighHotels from './pages/EastleighHotels/EastleighHotels';
import Layout from './components/Layout/Layout';
import Registration from './pages/Registration/Registration';
import Yare from './pages/Home/Sections/Yare/Yare';
import Urban from './pages/Home/Sections/Urban/Urban';
import Bushra from './pages/Home/Sections/Bushra/Bushra';
import Baraka from './pages/Home/Sections/Baraka/Baraka';
import HYYAT from './pages/Home/Sections/HYYAT/HYYAT';
import Sakina from './pages/Home/Sections/Sakina/Sakina';
import MogadishuSalesOnePager from './components/MogadishuSalesOnePager/MogadishuSalesOnePager'; // ⬅️ New import
import MoonsPalaceProposal from './pages/MoonsPalace/MoonsPalace';

// Lazy loaded components
const Privacy = lazy(() => import('./pages/Privacy/Privacy'));
const Legal = lazy(() => import('./pages/Legal/Legal'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Cookies = lazy(() => import('./pages/Cookies/Cookies'));
const BlogSystem = lazy(() => import('./components/Blog/Blog'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));

const LoadingFallback = () => <div className="loading">Loading...</div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Standalone pages without Layout */}
            <Route path="/moons-palace" element={<MoonsPalaceProposal />} />

            {/* Regular pages with Layout */}
            <Route path="*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/eastleigh-hotels" element={<EastleighHotels />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/blog" element={<BlogSystem />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/yare" element={<Yare />} />
                  <Route path="/urban" element={<Urban />} />
                  <Route path="/bushra" element={<Bushra />} />
                  <Route path="/baraka" element={<Baraka />} />
                  <Route path="/hyyat" element={<HYYAT />} />
                  <Route path="/sakina" element={<Sakina />} />
                  <Route path="/mogadishu-sales" element={<MogadishuSalesOnePager />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
