import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export function EducationSection() {
  const { data } = usePortfolioStore();

  return (
    <section id="education" className="py-24">
      <SectionHeader
        eyebrow="Education"
        title="Grounded in Artificial General Intelligence, driven by innovation"
        description="My academic path builds a rigorous foundation in algorithms, systems, and networks while expanding into AI, blockchain, and immersive computing—equipping me with both depth in fundamentals and breadth across innovation-driven fields."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {data.education.map((school, index) => (
          <motion.div
            key={school.institution}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              {school.timeline} · {school.location}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {school.credential}
            </h3>
            <p className="mt-1 text-base text-slate-300">
              {school.institution}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {school.highlights.map((highlight) => (
                <li key={highlight} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
