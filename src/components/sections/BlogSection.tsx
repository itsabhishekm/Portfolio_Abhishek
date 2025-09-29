import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { GradientBorderCard } from "../ui/GradientBorderCard";
import { Badge } from "../ui/Badge";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export function BlogSection() {
  const { data } = usePortfolioStore();

  return (
    <section id="blog" className="py-24">
      <SectionHeader
        eyebrow="Insights"
        title="Projects that turn ideas into real-world impact"
        description="Blending research, engineering, and creativity, I build solutions that go beyond experiments delivering scalable systems, immersive experiences, and measurable outcomes."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {data.blog.map((post, index) => (
          <GradientBorderCard key={post.id} delay={index * 0.08}>
            <div className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>{post.publishedOn}</span>
              </div>

              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} label={tag} variant="emerald" />
                ))}
              </div>

              <motion.a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-emerald-300"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >Coming Soon</motion.a>
            </div>
          </GradientBorderCard>
        ))}
      </div>
    </section>
  );
}
