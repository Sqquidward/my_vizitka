import { serviceIcons } from "@/data/services";
import type { Dictionary } from "@/i18n/types";
import { SectionHeading } from "./SectionHeading";
import { TiltSurface } from "./TiltSurface";

interface ServicesProps {
  dict: Dictionary;
}

export function Services({ dict }: ServicesProps) {
  const { sections, services } = dict;

  return (
    <>
      <SectionHeading
        id="services-heading"
        label={sections.services.label}
        title={sections.services.title}
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = serviceIcons[index];

          return (
            <div key={service.title} data-service-card className="[perspective:800px]">
              <TiltSurface
                maxTilt={6}
                className="gradient-border glass-card group flex h-full flex-col p-4 transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(0,242,254,0.06)] sm:p-6"
              >
                <div className="mb-4 flex items-center gap-2.5 rounded-xl border border-cyan/20 bg-cyan/5 p-2.5 transition-colors duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/10">
                  <Icon className="h-5 w-5 shrink-0 text-cyan" />
                  <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                    {service.title}
                  </h3>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </TiltSurface>
            </div>
          );
        })}
      </div>
    </>
  );
}
