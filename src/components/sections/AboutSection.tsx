import { motion } from "framer-motion";
import { usePortfolioStore } from "../../store/usePortfolioStore";
import { SectionHeader } from "../ui/SectionHeader";
import { GradientBorderCard } from "../ui/GradientBorderCard";

export function AboutSection() {
  const { data } = usePortfolioStore();

  return (
    <section id="about" className="py-24">
      <SectionHeader
        eyebrow="Profile"
        title="Designing intelligent, human-centered experiences"
        description="I create AI tools that simplify complex work and put people at the center, making technology more understandable, and empowering. My current line of work spans Generative AI, Agentic AI, Interpretability, Reasoning, and the Monosemanticity of Large Language Models, as well as automation and immersive interfaces that unite AI systems with a focus on clarity, reliability, and faithfulness."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <GradientBorderCard className="p-8">
          <h3 className="text-lg font-semibold text-white">Signature themes</h3>
          <div className="mt-6 grid gap-4 text-sm text-slate-300 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="font-medium text-slate-100">GenAI Orchestration</p>
              <p className="mt-2 text-slate-400">Designing multi-agent workflows, RAG pipelines, and intelligent systems with quality and scale in mind.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="font-medium text-slate-100">Computer Vision & Intelligence</p>
              <p className="mt-2 text-slate-400">Building systems that interpret the world visually spanning from vein mapping for safety detection to realistic 3D scene reconstruction.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="font-medium text-slate-100">Data-Informed Impact</p>
              <p className="mt-2 text-slate-400">Transforming messy datasets into clear, actionable intelligence for real-world decision-making.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="font-medium text-slate-100">Cloud & DevOps Scaling</p>
              <p className="mt-2 text-slate-400">Deploying AI and software solutions with AWS, Azure, Docker, and HPC pipelines to achieve enterprise-grade performance.</p>
            </div>
          </div>
        </GradientBorderCard>

        <div className="grid gap-6">
          {data.skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                {category.title}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-200">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
