import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
    </main>
  );
};

export default Home;