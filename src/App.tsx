// src/App.tsx
import React from "react";
import RootLayout from "./components/layout/RootLayout";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import PublicationsSection from "./components/sections/BlogSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import EducationSection from "./components/sections/EducationSection";

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <PublicationsSection />
      <section id="contact" className="py-12">
        <h2 className="text-2xl font-semibold">Thank you for stopping by and spending your time!</h2>
        <p className="text-xl text-slate-800">Feel free to reach out via email or on LinkedIn if you have suggestions, or would like to connect and collaborate on projects :)</p>
      </section>
    </RootLayout>
  );
}

export default App;
