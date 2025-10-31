// src/components/ui/SectionHeader.tsx
import React from "react";

export function SectionHeader({ eyebrow, title, children }: { eyebrow?: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <header className="mb-6">
      {eyebrow && <div className="text-xs tracking-widest text-slate-400 uppercase">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">{title}</h2>
      {children && <div className="mt-3 text-base text-slate-600 max-w-3xl">{children}</div>}
    </header>
  );
}

export default SectionHeader;
