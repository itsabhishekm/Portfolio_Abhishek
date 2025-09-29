import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = "left",
}: PropsWithChildren<SectionHeaderProps>) {
  return (
    <div
      className={clsx("max-w-3xl", {
        "text-center mx-auto": alignment === "center",
      })}
    >
      {eyebrow ? (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm text-slate-400"
        >
          {eyebrow}
        </motion.span>
      ) : null}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-100"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
          className="mt-4 text-base md:text-lg text-slate-400"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
