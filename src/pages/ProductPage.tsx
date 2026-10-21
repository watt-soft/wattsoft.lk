import React, { useEffect } from 'react';
import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { ProductHero } from '../components/organisms/kinderflow/ProductHero';
import { ProductWhatIs } from '../components/organisms/kinderflow/ProductWhatIs';
import { ProductFeatures } from '../components/organisms/kinderflow/ProductFeatures';
import { ProductWhyChoose } from '../components/organisms/kinderflow/ProductWhyChoose';
import { ProductSubscription } from '../components/organisms/kinderflow/ProductSubscription';
import { ProductConnect } from '../components/organisms/kinderflow/ProductConnect';

export const ProductPage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    const parts = hash.split('#');
    if (parts.length > 2) {
      const anchorId = parts[2];
      const el = document.getElementById(anchorId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20 overflow-x-hidden">
        <ProductHero />
        <ProductWhatIs />
        <ProductFeatures />
        <ProductWhyChoose />
        <ProductSubscription />
        <ProductConnect />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
