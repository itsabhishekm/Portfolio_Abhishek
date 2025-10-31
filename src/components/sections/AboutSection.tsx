// src/components/sections/AboutSection.tsx
import React from "react";
import SectionHeader from "../ui/SectionHeader";

const SKILL_GROUPS: { title: string; tags: string[] }[] = [
  {
    title: "Languages",
    tags: ["Python", "SQL", "Java", "R", "Scala"],
  },
  {
    title: "Data Engineering & Orchestration",
    tags: [
      "PySpark",
      "Databricks",
      "Data Lake",
      "Snowflake",
      "PostgreSQL",
      "MongoDB",
      "Airflow",
      "N8N"
    ],
  },
  {
    title: "Machine Learning & Generative AI",
    tags: [
      "Hugging Face",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "FAISS",
      "PyTorch",
      "Keras",
      "scikit-learn",
      "Pandas",
      "NumPy"
    ],
  },
  
  {
    title: "DevOps & Cloud Infrastructure",
    tags: [
      "Docker",
      "AWS (S3, ECR, EC2, Lambda, Fargate)",
      "Azure (ADF, ADLS Gen2, Synapse)",
      "HPC",
      "Grafana Cloud",
      "Jenkins",
      "FastAPI",
      "Vercel",
      "GitHub",
    ],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-12">
      <SectionHeader eyebrow="ABOUT" title="Designing intelligent, human-centered systems">
        I am a graduate student whose work spans from Data Engineering to AI/ML (full-stack), with ongoing research focused on large models.
        <br />
        Having spent over 2+ years in the industry,below is a summary of key areas and tech stack I have worked with :)
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Signature theme cards */}
        <div className="md:col-span-8">
          <div className="space-y-4">
            {/* Card 1 */}
            <div
              className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm
              transition-colors duration-300 ease-in-out hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-md
              cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-200"
              tabIndex={0}
            >
              <div className="font-semibold text-lg text-slate-800">
                Multimodal & Agentic AI Orchestration
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Developed multi-agent workflows and RAG pipelines from adaptive to graph-based architectures,
                building intelligent systems with quality and scalability in mind. Employed models such as
                LLaMA, Mistral, GPT (Azure OpenAI), Gemma-2, RoBERTa, and Flan-T5.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm
              transition-colors duration-300 ease-in-out hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-md
              cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-200"
              tabIndex={0}
            >
              <div className="font-semibold text-lg text-slate-800">
                Computer Vision & Intelligence
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Designed a custom neural network to identify human veins using Near-Infrared (NIR) imagery
                and reconstruct them into realistic 3D visualizations. Implemented the system on a dynamically
                reconfigurable AI accelerator for high-throughput inference.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm
              transition-colors duration-300 ease-in-out hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-md
              cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-200"
              tabIndex={0}
            >
              <div className="font-semibold text-lg text-slate-800">
                Data Engineering & Orchestration
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Built ETL pipelines on AWS and Azure using Snowflake and Databricks for scalable data ingestion,
                cleaning, and feature engineering. Performed EDA and instrumentation to surface actionable
                metrics for stakeholders.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm
              transition-colors duration-300 ease-in-out hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-md
              cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-200"
              tabIndex={0}
            >
              <div className="font-semibold text-lg text-slate-800">
                Cloud & DevOps Scaling
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Deployed solutions with Azure, AWS, Docker, Kubernetes, Grafana Cloud, Jenkins CI/CD, and HPC
                pipelines to deliver enterprise-grade performance and reproducibility.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Skills section */}
        <aside className="md:col-span-4">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
            {/* SKILLS heading styled like ABOUT */}
            <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">
              TECH STACK I HAVE WORKED WITH
            </div>

            <div className="space-y-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title}>
                  <div className="text-x font-semibold text-slate-900">
                    {group.title}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AboutSection;
