// src/components/sections/ProjectsSection.tsx
import React from "react";
import SectionHeader from "../ui/SectionHeader";

type Project = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  subtitle?: string;
  problem?: string;
  approach?: string;
  impact?: string;
};

const PROJECTS: Project[] = [
  {
    id: "medquery",
    title: "MedQuery — RAG Based Clinical Assistant",
    blurb: "Generative AI medical assistant enabling secure, context-aware insights from unstructured reports.",
    tags: ["LangChain","HuggingFace Mistral","FAISS","RAG","Jenkins","Docker","AWS","Flask","HTML","CSS",],
    subtitle: "A retrieval-augmented clinical assistant that transforms unstructured medical PDFs into an intelligent, searchable knowledge base.",
    problem: "Medical teams faced challenges accessing insights from large volumes of unstructured PDFs, leading to time-intensive searches and fragmented retrieval.",
    approach: "Developed a RAG pipeline using HuggingFace Mistral and sentence transformers to embed and index medical documents in FAISS, deployed in AWS with CI/CD.",
    impact: "Reduced document retrieval time by over 80%, improved query accuracy, and delivered a scalable, secure AI assistant."
  },
  {
    id: "intellex",
    title: "Intellex — Multi-Agent Decision System",
    blurb: "Autonomous multi-agent framework enabling real-time financial and medical reasoning.",
    tags:  [
        "LangChain",
        "LangGraph",
        "LLaMA-3",
        "Gemma-2",
        "Phidata",
        "yFinance API",
        "Tavily",
        "FastAPI",
        "SonarQube",
        "AWS (ECR & Fargate)",
      ],
    subtitle:"A LangGraph-powered multi-agent platform integrating Gemma-2 and LLaMA-3 to deliver intelligent insights across finance and healthcare domains. Agents collaborate through reasoning chains to interpret market trends and medical literature for contextual decision support.",
    problem:
        "Professionals faced fragmented insights between financial metrics and medical references, requiring a unified AI system capable of multi-domain reasoning.",
    approach:
        "Developed coordinated agents using LangChain and LangGraph to analyze stock and interpret medical domains. Deployed in AWS using Jenkins CI/CD pipelines.",
    impact:
        "Delivered a scalable, multi-domain AI assistant capable of performing real-time, context-aware analysis with improved interpretability and response depth.",
  
  },
  {
    id: "shinra",
    title: "ShinraRec — AI Based Recommendation Engine",
    blurb: "RAG-based recommendation system for contextual, domain-aware content discovery.",
    tags: [
        "LangChain",
        "LLaMA-3",
        "RAG",
        "ChromaDB",
        "GCP VM",
        "Grafana Cloud",
        "Minikube",
        "Docker",
        "GitHub (SCM)",
        "Streamlit",
      ],
    subtitle:"A retrieval-augmented recommendation engine built with LLaMA-3 and LangChain, transforming structured and unstructured datasets into a semantic knowledge base for intelligent query matching and content personalization.",
    problem:"Traditional recommendation systems lacked contextual understanding, limiting their accuracy and adaptability in knowledge-heavy domains.",
    approach:"Implemented a RAG architecture using LLaMA-3, sentence transformers and ChromaDB for semantic indexing. Orchestrated via Kubernetes on GCP VMs, and monitored with Grafana Cloud.",
    impact:"Enhanced recommendation relevance and contextual precision, achieving higher interpretability and reducing latency in real-time query retrieval by over 60%.",
  }
];

export function ProjectsSection() {
  const [selectedId, setSelectedId] = React.useState<string>(PROJECTS[0].id);
  const selected = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  return (
    <section id="projects" className="py-12">
      <SectionHeader eyebrow="Projects" title="Multi-agent systems to AI-powered recommendation engines, projects that turned into impactful solutions">
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-4">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={"group w-full text-left rounded-2xl p-6 border border-slate-100 bg-white shadow-sm transition-colors duration-300 ease-in-out cursor-pointer hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200"}
            >
              <div className="mt-2 font-semibold">{p.title}</div>
              <div className="mt-1 text-sm text-slate-600">{p.blurb}</div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-8">
          <article className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  {selected.tags?.map((t) => <span key={t} className="text-xs font-medium px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-700 shadow-sm 
                 hover:shadow-md hover:from-emerald-100 hover:to-emerald-200 transition-all duration-30 ">{t}</span>)}
                </div>

                <h3 className="mt-4 text-xl font-semibold">{selected.title}</h3>
                {selected.subtitle && <div className="mt-2 text-sm text-slate-600">{selected.subtitle}</div>}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Problem</div>
                <p className="mt-2">{selected.problem}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Approach</div>
                <p className="mt-2">{selected.approach}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Impact</div>
                <p className="mt-2">{selected.impact}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
