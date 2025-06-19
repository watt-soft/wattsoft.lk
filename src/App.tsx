import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/organisms/Header';
import { Hero } from './components/organisms/Hero';
import { Services } from './components/organisms/Services';
import { Projects } from './components/organisms/Projects';
import { About } from './components/organisms/About';
import { Testimonials } from './components/organisms/Testimonials';
import { Contact } from './components/organisms/Contact';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden w-full min-w-0">
        <Header />
        <main className="pt-16 md:pt-20 overflow-x-hidden">
          <Hero />
          <Services />
          {/* <Projects /> */}
          <About />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;