import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface GradientBorderCardProps {
  className?: string;
  delay?: number;
}

export function GradientBorderCard({
  children,
  className,
  delay = 0,
}: PropsWithChildren<GradientBorderCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl ${className ?? ""}`}
    >
      <div className="absolute inset-0 rounded-3xl border border-emerald-500/20 pointer-events-none" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/10 via-transparent to-sky-500/10 opacity-70 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
