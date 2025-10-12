import { motion } from "framer-motion";
import { usePortfolioStore } from "../../store/usePortfolioStore";
import { SectionHeader } from "../ui/SectionHeader";
import { GradientBorderCard } from "../ui/GradientBorderCard";
import { Badge } from "../ui/Badge";

const caseStudyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: index * 0.08, ease: "easeOut" },
  }),
};

export function ProjectsSection() {
  const { data, activeProjectId, setActiveProject, getActiveProject } =
    usePortfolioStore();
  const activeProject = getActiveProject();

  return (
    <section id="projects" className="py-24">
      <SectionHeader
        eyebrow="Projects"
        title="Projects that turn ideas into real-world impact"
        description="From multi agent systems to AI-powered recommendation engines and schema-driven LLM pipelines, my projects combine research, engineering, and creativity to deliver solutions that are practical, impactful, and future-ready."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-3">
          {data.projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              className={`w-full rounded-3xl border p-5 text-left transition-all ${
                activeProjectId === project.id
                  ? "border-emerald-400/40 bg-emerald-500/10"
                  : "border-white/10 bg-white/5 hover:border-emerald-300/30 hover:bg-emerald-500/5"
              }`}
              onClick={() => setActiveProject(project.id)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              variants={caseStudyVariants}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                {project.timeline}
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {project.name}
              </p>
              <p className="mt-2 text-sm text-slate-300">{project.headline}</p>
            </motion.button>
          ))}
        </div>

        {activeProject ? (
          <GradientBorderCard className="p-8">
            <div className="flex flex-wrap gap-2">
              {activeProject.tech.map((tech) => (
                <Badge key={tech} label={tech} variant="sky" />
              ))}
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {activeProject.name}
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  {activeProject.summary}
                </p>
              </div>

              <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Problem
                  </p>
                  <p className="mt-2 leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Approach
                  </p>
                  <p className="mt-2 leading-relaxed">
                    {activeProject.approach}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Impact
                  </p>
                  <p className="mt-2 leading-relaxed">
                    {activeProject.impact}
                  </p>
                </div>
              </div>

              {activeProject.links?.length ? (
                <div className="flex flex-wrap gap-3">
                  {activeProject.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition-all hover:border-emerald-300/40 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </GradientBorderCard>
        ) : null}
      </div>
    </section>
  );
}
