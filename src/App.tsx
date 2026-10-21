import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/organisms/Header';
import { Hero } from './components/organisms/Hero';
import { Services } from './components/organisms/Services';
import { Projects } from './components/organisms/Projects';
import { About } from './components/organisms/About';
import { Testimonials } from './components/organisms/Testimonials';
import { Contact } from './components/organisms/Contact';
import { Footer } from './components/organisms/Footer';
import { HashRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import InternRedirect from './InternRedirect';
import { ProductPage } from './pages/ProductPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20 overflow-x-hidden">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/kinderflow" element={<ProductPage />} />
            <Route path="/product" element={<Navigate to="/product/kinderflow" replace />} />
            <Route path="/products" element={<Navigate to="/product/kinderflow" replace />} />
            <Route path="/kinderflow" element={<Navigate to="/product/kinderflow" replace />} />
            <Route path="/intern" element={<InternRedirect />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;