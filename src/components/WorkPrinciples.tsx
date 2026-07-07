import { Handshake, MessageCircle, Rocket, Timer } from "lucide-react";
import { workPrinciples } from "@/data/work-principles";
import { ScrollReveal } from "./motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";
import { SectionHeading } from "./SectionHeading";
import { TiltSurface } from "./TiltSurface";

const icons = [MessageCircle, Timer, Handshake, Rocket] as const;

export function WorkPrinciples() {
  return (
    <section aria-labelledby="work-principles-heading" className="section-below-fold">
      <ScrollReveal>
        <SectionHeading
          id="work-principles-heading"
          label="// approach"
          title="Как я работаю"
        />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {workPrinciples.map((item, index) => {
          const Icon = icons[index] ?? MessageCircle;

          return (
            <StaggerItem key={item.id}>
              <TiltSurface
                maxTilt={6}
                className="gradient-border glass-card group flex h-full flex-col p-5 transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(0,242,254,0.06)] sm:p-6"
              >
                <Icon className="mb-4 h-5 w-5 text-cyan/50 transition-colors duration-300 group-hover:text-cyan/80" />

                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </TiltSurface>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
