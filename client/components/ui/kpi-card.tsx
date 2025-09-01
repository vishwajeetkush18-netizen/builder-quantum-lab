import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type KPIAccent = "blue" | "green" | "orange" | "purple";

const accentClass: Record<KPIAccent, string> = {
  blue: "accent-blue",
  green: "accent-green",
  orange: "accent-orange",
  purple: "accent-purple",
};

interface KPIStatProps {
  label: string;
  value: ReactNode;
  icon: ReactNode;
  accent?: KPIAccent;
  deltaText?: string;
  deltaClassName?: string;
  className?: string;
}

export function KPIStat({
  label,
  value,
  icon,
  accent = "blue",
  deltaText,
  deltaClassName,
  className,
}: KPIStatProps) {
  return (
    <div
      className={cn(
        "glass-card-bright rounded-2xl p-8 scroll-reveal kpi-card-shadow relative overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 transform translate-x-6 -translate-y-6",
          accentClass[accent],
        )}
      ></div>
      <div className="flex items-start justify-between relative z-10">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
          <div className="text-4xl font-bold text-gray-900 mt-3">{value}</div>
          {deltaText ? (
            <p className={cn("text-xs font-medium mt-2", deltaClassName)}>
              {deltaText}
            </p>
          ) : null}
        </div>
        <div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center",
            accentClass[accent],
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default KPIStat;
