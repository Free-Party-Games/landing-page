'use client'
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NavigationTabs from './components/NavigationTabs';
import GamesGrid from './components/GamesGrid';
import QuickPlaySection from './components/QuickPlaySection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import DecorativeBackground from './components/DecorativeBackground';
import { GAMES } from './constants/games';

export default function FreePartyGames() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <div className="min-h-screen doodle-bg">
        <DecorativeBackground />
        <Header />
        <HeroSection />
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'all' && <GamesGrid games={GAMES} />}
        {activeTab === 'quick' && <QuickPlaySection />}
        {activeTab === 'about' && <AboutSection />}

        <Footer />
      </div>
    </>
  );
}