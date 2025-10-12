import { Suspense, lazy } from "react";
import { RootLayout } from "./components/layout/RootLayout";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";

const EducationSection = lazy(() =>
  import("./components/sections/EducationSection").then((module) => ({
    default: module.EducationSection,
  })),
);

const BlogSection = lazy(() =>
  import("./components/sections/BlogSection").then((module) => ({
    default: module.BlogSection,
  })),
);

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <BlogSection />
      
      <Suspense
        fallback={
          <div className="py-24 text-center text-slate-400" aria-live="polite">
            Loading curated stories…
          </div>
        }
      >
        <ProjectsSection />
        <EducationSection />
      </Suspense>
      <ContactSection />
    </RootLayout>
  );
}

export default App;
