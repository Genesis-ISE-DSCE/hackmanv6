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
  const launchDate = new Date("June 4, 2023 12:00:00");

  // Calculate the initial countdown value
  const currentTime = new Date();
  const initialCountdown = Math.floor(
    (launchDate.getTime() - currentTime.getTime()) / 1000
  );
  return (
    <div>
      <Landing />
      <Navbar currentPage = 'landing'/>
      <Counter initialCountdown={initialCountdown} />
      <About />
      <Timeline />
      {/* <Themes /> */}
      {/* <Sponsors /> */}
      <Faq />
      {/* <Organisers /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
