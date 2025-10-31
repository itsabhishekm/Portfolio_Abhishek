// src/components/sections/ExperienceSection.tsx
import React from "react";
import SectionHeader from "../ui/SectionHeader";

type Exp = {
  date: string;
  mode?: string;
  role: string;
  company: string;
  tags: string[];
  bullets: string[];
};

const experiences: Exp[] = [
  {
    date: "July 2023 — December 2024",
    mode: "Onsite",
    role: "GenAI Advanced Data Analyst/Engineer",
    company: "Ernst & Young",
    tags: ["LangChain", "LangGraph", "HuggingFace", "PySpark", "Snowflake", "Databricks", "Azure", "FastAPI"],
    bullets: [
      "Built end-to-end RAG pipelines for payroll analytics across 50+ clients by fine-tuning GPT-4, reducing manual effort by ~90%.",
      "Deployed liquidity risk forecasting agents using LangGraph and Gradient Boosting models, boosting accuracy 74–87% and saving 48+ hours.",
      "Enhanced enterprise risk detection capacity using Isolation Forest; automated validation workflows and onboarded 10+ entities.",
      "Leveraged HPC with multi-GPU training to achieve 2× faster experimentation cycles, accelerating deployment and onboarding 5 additional clients in Q3.",
    ],
  },
  {
    date: "October 2022 — April 2023",
    mode: "Onsite",
    role: "R&D – Data Science Intern",
    company: "Agappe Diagnostics",
    tags: ["HuggingFace", "CNN", "PyTorch", "Keras", "RoBERTa", "CUDA", "REST API", "Databricks"],
    bullets: [
      "Developed a deep learning model for vein mapping on NIR imagery, improving pixel accuracy by ~93% and reducing clinical failure rates by ~40%.",
      "Fine-tuned transformer models for large-scale text analytics, automating review insights and cutting R&D workload by ~70%.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <SectionHeader eyebrow="Experience" title="Creating reliable and human-centered solutions for business" />

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <article
            key={`${exp.company}-${idx}`}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6
                        transition-colors duration-300 ease-in-out 
                        hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-md
                        cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            {/* header row: company left, date+mode right */}
            <div className="flex items-start justify-between">
              <div className="text-base font-semibold text-slate-900">
                {exp.company}
              </div>

              <div className="text-sm text-slate-500">
                {exp.date} <span className="mx-2">•</span> {exp.mode}
              </div>
            </div>

            {/* role */}
            <div className="mt-4">
              <div className="text-lg font-medium text-slate-900">
                {exp.role}
              </div>

              {/* tags row (pale green chips) */}
              <div className="mt-4 flex flex-wrap gap-3">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-700 shadow-sm 
                 hover:shadow-md hover:from-emerald-100 hover:to-emerald-200 transition-all duration-30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* divider */}
            <hr className="my-6 border-t border-slate-100" />

            {/* summary heading */}
            <div className="text-xs uppercase tracking-wide text-slate-500">
              Summary of Work
            </div>

            {/* numbered list */}
            <ol className="mt-4 space-y-4 list-none">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-sm text-slate-500">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{b}</p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
