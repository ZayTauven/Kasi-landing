import Image from "next/image";

import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Commandez",
    description:
      "Une course, un colis ou une tournée : dites où, l'app trouve le Kasiman le plus proche.",
  },
  {
    title: "Un Kasiman accepte",
    description:
      "Son nom, sa photo, sa note et son temps d'arrivée s'affichent aussitôt.",
  },
  {
    title: "Suivez jusqu'à l'arrivée",
    description:
      "Le trajet reste visible en temps réel, du point de départ à la destination.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="comment-ca-marche" className="pb-28 lg:pb-32">
      <div className="container">
        <h2 className="text-center text-xl text-balance md:text-2xl lg:text-3xl">
          Trois gestes, et ça roule.
          <br className="max-md:hidden" />
          <span className="text-muted-foreground">
            De la commande à la remise, vous voyez tout.
          </span>
        </h2>

        {/* La ligne de trajet */}
        <div className="relative mx-auto mt-12 max-w-4xl lg:mt-16">
          {/* Plan de ville en filigrane */}
          <Image
            src="/kasi/map-bg.jpg"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none object-cover opacity-[0.05] grayscale select-none dark:opacity-[0.07] dark:invert"
          />

          {/* Ligne horizontale (desktop) */}
          <div
            aria-hidden="true"
            className="text-muted-foreground/70 absolute top-5 right-[16%] left-[16%] hidden h-px md:block"
          >
            <div className="animate-route-x h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]" />
          </div>
          {/* Ligne verticale (mobile) */}
          <div
            aria-hidden="true"
            className="text-muted-foreground/70 absolute top-10 bottom-16 left-5 w-px md:hidden"
          >
            <div className="animate-route-y h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]" />
          </div>

          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <li
                  key={step.title}
                  className="flex gap-5 md:flex-col md:items-center md:gap-6 md:text-center"
                >
                  {/* Arrêt sur la ligne */}
                  <div className="relative z-10 shrink-0">
                    {isLast ? (
                      <span className="bg-background grid size-10 place-items-center rounded-full">
                        <MapPin
                          className="text-kasi size-8 fill-current"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                    ) : (
                      <span
                        className={cn(
                          "border-primary bg-background text-primary font-display grid size-10 place-items-center rounded-full border-2 text-sm",
                        )}
                      >
                        {i + 1}
                      </span>
                    )}
                  </div>

                  <div className="max-w-70">
                    <h3 className="font-display text-lg leading-tight font-bold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-snug">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
