import React from 'react';
import Hero from './components/Hero';
import AboutAndTech from './components/AboutAndTech';
import ProjectsAndCode from './components/ProjectsAndCode';
import MoreAndContact from './components/MoreAndContact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f14] font-sans text-white">
      {/* Hero with Spline */}
      <Hero />

      {/* About + Technologies */}
      <AboutAndTech />

      {/* Watch Me Code + Projects */}
      <ProjectsAndCode />

      {/* Academic + Languages + Beyond Coding + Contact + Footer */}
      <MoreAndContact />
    </div>
  );
}
