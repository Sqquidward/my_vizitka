import { Handshake, MessageCircle, Rocket, Timer } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { SectionHeading } from "./SectionHeading";
import { TiltSurface } from "./TiltSurface";

const icons = [MessageCircle, Timer, Handshake, Rocket] as const;

interface WorkPrinciplesProps {
  dict: Dictionary;
  variant?: "stack" | "pinned";
}

export function WorkPrinciples({ dict, variant = "stack" }: WorkPrinciplesProps) {
  const { sections, workPrinciples } = dict;

  if (variant === "pinned") {
    return (
      <>
        <div className="mb-8 md:mb-12">
          <SectionHeading
            id="work-principles-heading"
            label={sections.approach.label}
            title={sections.approach.title}
          />
        </div>

        <div className="relative min-h-[280px] md:min-h-[320px]">
          {workPrinciples.map((item, index) => {
            const Icon = icons[index] ?? MessageCircle;

            return (
              <div
                key={item.title}
                data-approach-step
                className="absolute inset-0 flex items-center"
              >
                <TiltSurface
                  maxTilt={4}
                  className="gradient-border glass-card group flex w-full flex-col p-6 transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(0,242,254,0.06)] sm:p-8"
                >
                  <Icon className="mb-4 h-6 w-6 text-cyan/60 transition-colors duration-300 group-hover:text-cyan" />
                  <h3 className="text-lg font-medium text-foreground sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </TiltSurface>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <div data-reveal="heading">
        <SectionHeading
          id="work-principles-heading"
          label={sections.approach.label}
          title={sections.approach.title}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {workPrinciples.map((item, index) => {
          const Icon = icons[index] ?? MessageCircle;

          return (
            <div key={item.title} data-approach-step>
              <TiltSurface
                maxTilt={6}
                className="gradient-border glass-card group flex h-full flex-col p-4 transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(0,242,254,0.06)] sm:p-6"
              >
                <Icon className="mb-4 h-5 w-5 text-cyan/50 transition-colors duration-300 group-hover:text-cyan/80" />
                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </TiltSurface>
            </div>
          );
        })}
      </div>
    </>
  );
}
