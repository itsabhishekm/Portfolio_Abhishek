// src/components/sections/EducationSection.tsx
import React from "react";
import SectionHeader from "../ui/SectionHeader";

type Education = {
  date: string;
  location: string;
  degree: string;
  institution: string;
  description: string;
  coursework: string;
};

const education: Education[] = [
  {
    date: "2025 — 2026",
    location: "Tucson, Arizona",
    degree: "Master of Science in Data Science",
    institution: "University of Arizona",
    description:
      "Currently working at the intersection of Generative AI and Agentic AI, and the interpretability, reasoning, and monosemanticity of large models.",
    coursework:
      "Graduate coursework in Applied NLP, Neural Networks, Machine Learning, Data Mining, and SQL/NoSQL Databases.",
  },
  {
    date: "2019 — 2023",
    location: "Kochi",
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Rajagiri School of Engineering and Technology",
    description:
      "Led student teams in research combining NLP and machine learning models for retention analysis, automated data pipelines, and curriculum development.",
    coursework:
      "Graduated with coursework in Speech & Audio Processing, Machine Learning, Computer Vision, Information Theory, and Coding.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-12">
      <SectionHeader
        eyebrow="Education"
        title="Grounded in Artificial General Intelligence, driven by innovation"
      >
      </SectionHeader>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <article
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm
                        transition-colors duration-300 ease-in-out 
                        hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-md
                        cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            {/* Degree + date/location in same row */}
            <div className="flex items-start justify-between">
              <div className="text-lg font-semibold text-slate-900">
                {edu.degree}
              </div>
              <div className="text-sm text-slate-500">
                {edu.date} <span className="mx-2">•</span>{" "}
                <span className="uppercase">{edu.location}</span>
              </div>
            </div>

            {/* Institution */}
            <div className="text-slate-600 mt-1">{edu.institution}</div>

            {/* Description and coursework */}
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              {edu.description}
            </p>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {edu.coursework}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
