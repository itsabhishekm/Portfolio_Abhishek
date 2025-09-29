import { SectionHeader } from "../ui/SectionHeader";
import { GradientBorderCard } from "../ui/GradientBorderCard";
import { Badge } from "../ui/Badge";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export function ExperienceSection() {
  const { data } = usePortfolioStore();

  return (
    <section id="experience" className="py-24">
      <SectionHeader
        eyebrow="Experience"
        title="Transforming ideas into intelligent systems"
        description="Through my work in GenAI R&D, I’ve gained hands-on experience building LLM pipelines, agentic workflows, and schema-driven extraction systems. These projects strengthened my ability to combine AI, software engineering, and systems thinking delivering solutions that are practical, reliable, and scalable."
      />

      <div className="mt-12 space-y-8">
        {data.experiences.map((experience, index) => (
          <GradientBorderCard key={experience.company} className="p-8" delay={index * 0.1}>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {experience.duration} · {experience.location}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <p className="text-lg text-slate-300">{experience.company}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech) => (
                  <Badge key={tech} label={tech} variant="emerald" />
                ))}
              </div>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              {experience.description.map((sentence) => (
                <li key={sentence} className="leading-relaxed">
                  {sentence}
                </li>
              ))}
            </ul>
          </GradientBorderCard>
        ))}
      </div>
    </section>
  );
}
