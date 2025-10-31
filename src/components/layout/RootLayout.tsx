// src/components/layout/RootLayout.tsx
import React, { PropsWithChildren } from "react";
import { Navigation } from "./Navigation";

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen w-full bg-page text-slate-900 antialiased">
      <div className="relative">
        {/* light radial accents */}
        <div
          className="absolute inset-x-0 top-0 h-[420px] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top, rgba(16,185,129,0.06), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-28 h-[320px] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top, rgba(59,130,246,0.04), transparent 55%)",
          }}
        />

        <Navigation />

        <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
