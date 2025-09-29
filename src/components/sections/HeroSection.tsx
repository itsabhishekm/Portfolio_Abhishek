import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePortfolioStore } from "../../store/usePortfolioStore";
import { GradientBorderCard } from "../ui/GradientBorderCard";
import { Badge } from "../ui/Badge";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export function HeroSection() {
  const { data } = usePortfolioStore();
  const { profile } = data;

  return (
    <section id="hero" className="relative grid items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr]">
      <div className="relative z-10 space-y-8">
        <motion.div
          className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={heroVariants}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-medium text-slate-300">
            {profile.location}· Available for impactful work</span>
        </motion.div>

        <motion.h1
          custom={2}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          custom={3}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-slate-300 md:text-xl"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          custom={4}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-200 transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-400/20"
          >
            View signature work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="flex flex-wrap items-center gap-3">
            {profile.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="relative">
        <GradientBorderCard className="overflow-hidden">
          <motion.div
            className="relative flex flex-col gap-6 rounded-3xl bg-slate-900/60 p-8 backdrop-blur"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <Badge label={profile.title} variant="emerald" />
              <Badge label="Cloud & DevOps" variant="sky" />
              <Badge label="Product Strategy" variant="slate" />
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Contact
              </p>
              <div className="space-y-2 text-base">
                <a href={`mailto:${profile.email}`} className="block text-slate-200">
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="block text-slate-200">
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Expertise
                </p>
                <p>GenAI Pipelines · Agentic RAG · Immersive Learning · ML Ops</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Availability
                </p>
                <p>Open to research-driven internships & collaborations</p>
              </div>
            </div>
          </motion.div>
        </GradientBorderCard>

        <motion.div
          className="absolute -left-10 top-10 hidden h-28 w-28 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-sky-500/30 blur-2xl md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
