import React from 'react';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import Katalog from './components/Katalog';
import WelcomingNote from './components/WelcomingNote';
import KastarasSignature from './components/KastarasSignature';
import History from './components/History';
import Testimoni from './components/Testimoni';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <Katalog />
      <WelcomingNote />
      <KastarasSignature />
      <History />
      <Testimoni />
      <Footer />
    </>
  );
};

export default LandingPage;
