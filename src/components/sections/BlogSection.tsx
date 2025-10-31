// src/components/sections/PublicationsSection.tsx
import React from "react";
import SectionHeader from "../ui/SectionHeader";

type Pub = {
  date: string;
  title: string;
  summary: string;
  tags: string[];
  cta?: string;
};

const pubs: Pub[] = [
  {
    date: "AUG 2025",
    title: "LLM Explainability & Reasoning",
    summary:
      "Exploring how the large models are more transparent and understandable, both after they make predictions and from within their architecture. Our work involves using post-hoc methods like LIME, SHAP, and attention visualization to see why models behave the way they do, while also studying intrinsic techniques and probing approaches to understand their internal reasoning. Bringing these perspectives together has helped me see how we can build AI systems that aren’t just powerful, but genuinely trustworthy and accountable.",
    tags: ["Post-hoc","LIME","SHAP"]
  },
  {
    date: "SEP 2025",
    title: "Monosemanticity: One Concept per Neuron",
    summary:
      "Neural networks often embed multiple ideas into the same neuron, making it hard to tell what is really happening inside. The concept of monosemanticity aims to give each neuron or feature a clear, single meaning. Using techniques like dictionary learning, we can break down the network’s hidden layers into sparse, interpretable components that reveal what the model is actually representing. If we get this right, it could lead to AI systems that are easier to predict, explain, and trust in models that think in ways we can truly understand.",
    tags: ["DictionaryLearning"]
  },
  {
    date: "SEP 2025",
    title: "Attribution Graphs in Transformers",
    summary:
      "Attribution graphs and circuit analysis help us look inside language models to see how ideas actually move and connect. Rather than just focusing on the final output, these methods trace which neurons, attention heads, and connections took part in the reasoning process. By revealing these hidden pathways, we can start to understand how models form analogies, grasp syntax, or recall facts.",
    tags: ["AttributionGraphs","TransformerCircuits",]
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-12">
      <SectionHeader eyebrow="Ongoing Research" title="Ongoing Research: Understanding how large models learn and reason">
        Exploring how large models understand and reason by studying how individual neurons represent specific ideas,
        building visual tools to trace and explain the flow of reasoning inside transformer models.
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pubs.map((p) => (
           <article
            key={p.title}
            className={`group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-slate-800 min-h-[320px]
              transition-colors duration-300 ease-in-out cursor-pointer
              hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-emerald-200`}
          >
            <div className="text-xs uppercase text-slate-400 tracking-wide">{p.date}</div>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm text-black">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="text-xs font-medium px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-700 shadow-sm 
                 hover:shadow-md hover:from-emerald-100 hover:to-emerald-200 transition-all duration-30">{t}</span>)}
            </div>

            <div className="mt-6 text-sm text-slate-300">
              {p.cta}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PublicationsSection;
