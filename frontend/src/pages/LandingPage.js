import React from 'react'
import About from '../components/About';
import Counter from '../components/Counter';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import Organisers from '../components/Organisers';
import Sponsors from '../components/Sponsors';
import Themes from '../components/Themes';
import Timeline from '../components/Timeline';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Counter />
      <About />
      <Timeline />
      <Themes />
      <Sponsors />
      <Faq />
      <Organisers />
      <Footer />
    </div>
  );
}

export default LandingPage;
