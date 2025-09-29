import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_55%)] blur-3xl" />
        <div className="absolute inset-x-0 top-32 h-[400px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />

        <Navigation />

        <motion.main
          className="relative mx-auto max-w-6xl px-6 pb-24"
          initial={false}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
