import { services } from "@/data/services";
import { ScrollReveal } from "./motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";
import { SectionHeading } from "./SectionHeading";
import { TiltSurface } from "./TiltSurface";

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="section-below-fold">
      <ScrollReveal>
        <SectionHeading id="services-heading" label="// services" title="Что делаю" />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <StaggerItem key={service.title}>
              <TiltSurface
                maxTilt={6}
                className="gradient-border glass-card group flex h-full flex-col p-5 transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(0,242,254,0.06)] sm:p-6"
              >
                <div className="mb-4 inline-flex rounded-xl border border-cyan/20 bg-cyan/5 p-2.5 text-cyan transition-colors duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/10">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </TiltSurface>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
