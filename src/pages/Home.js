import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategorySection />
      {/* New Collection / Featured Products Section */}
      <section className="featured-products">
        <h2>New Collection</h2>
        {/* Product cards will be added here */}
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
