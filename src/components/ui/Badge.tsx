import clsx from "clsx";

interface BadgeProps {
  label: string;
  variant?: "emerald" | "slate" | "sky";
}

export function Badge({ label, variant = "emerald" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full",
        {
          "bg-emerald-500/10 text-emerald-300 border border-emerald-400/20":
            variant === "emerald",
          "bg-slate-500/10 text-slate-200 border border-slate-400/10":
            variant === "slate",
          "bg-sky-500/10 text-sky-300 border border-sky-400/20":
            variant === "sky",
        }
      )}
    >
      {label}
    </span>
  );
}
