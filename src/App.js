import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import EastleighHotels from './pages/EastleighHotels/EastleighHotels';
import Layout from './components/Layout/Layout'; // ⬅️ Import layout
import Registration from './pages/Registration/Registration';

// Lazy loaded components
const Privacy = lazy(() => import('./pages/Privacy/Privacy'));
const Legal = lazy(() => import('./pages/Legal/Legal'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Cookies = lazy(() => import('./pages/Cookies/Cookies'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));

const LoadingFallback = () => <div className="loading">Loading...</div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Suspense fallback={<LoadingFallback />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/eastleigh-hotels" element={<EastleighHotels />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </Layout>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
