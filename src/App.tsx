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
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import InternRedirect from './InternRedirect';

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
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intern" element={<InternRedirect />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;