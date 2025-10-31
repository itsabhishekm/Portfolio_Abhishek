// src/components/sections/HeroSection.tsx
import React from "react";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const roles = [
    "Open to Full time and Internship roles:",
    "GenAI Engineer",
    "ML Engineer",
    "Software Developer",
    "Backend Engineer",
    "Data Engineer",
  ];

  return (
    <section id="hero" className="py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Profile picture */}
        <div className="flex-shrink-0">
          <img
            src="/Abhi pic.JPG"
            alt="Abhishek Mohandas — profile photo"
            className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Right: Info */}
        <div className="flex-1">
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Abhishek Mohandas
          </p>

          <h2 className="mt-4 text-lg text-slate-700 max-w-2xl">
            Building end-to-end, scalable AI systems with a focus on improving reliability and advancing human-centered approaches in large models.
          </h2>

          {/* Mail ID */}
          <p className="mt-3 text-lg text-slate-600">
            <a
              href="mailto:abhishek.mohandas@outlook.com"
              className="hover:text-slate-800 transition-colors"
            >
              abhishek.mohandas@outlook.com
            </a>
            <div className="mt-3 text-lg text-slate-600">Tucson, Arizona</div>
          </p>

          {/* Buttons + Social Links */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
            <div className="flex items-center gap-4 text-sm">
              <a
                href="https://drive.google.com/file/d/1blC_eg7T2-vfT6iMFXyzU_jOun6OZiuV/view?usp=drive_link"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-700 transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-400/20"
                target="_blank"
                rel="noreferrer"
              >
                Resume <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a
                href="https://github.com/itsabhishekm"
                aria-label="GitHub"
                className="text-slate-700 hover:text-emerald-500 transition-colors inline-flex items-center gap-1 font-semibold"
              >
                GitHub <ArrowUpRight size={14} strokeWidth={2} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekmohandas/"
                aria-label="LinkedIn"
                className="text-slate-700 hover:text-emerald-500 transition-colors inline-flex items-center gap-1 font-semibold"
              >
                LinkedIn <ArrowUpRight size={14} strokeWidth={2} />
              </a>
              <a
                href="https://medium.com/@mabhishek2817"
                aria-label="Medium"
                className="text-slate-700 hover:text-emerald-500 transition-colors inline-flex items-center gap-1 font-semibold"
              >
                Medium <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Roles Section */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {/* Text only (bold) */}
            <div className="text-s text-slate-700 font-semibold mr-3">
              {roles[0]}
            </div>

            {/* Tags (bold inside pills) */}
            {roles.slice(1).map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border bg-white text-slate-700 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
