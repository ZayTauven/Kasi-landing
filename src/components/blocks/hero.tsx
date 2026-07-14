import Image from "next/image";
import Link from "next/link";

import { ArrowRight, BadgeCheck, MapPin, Receipt, Wallet } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { SpeedDashes } from "@/components/kasi-brand";
import { Button } from "@/components/ui/button";

const promises = [
  {
    title: "Suivi en temps réel",
    description: "Votre course ou votre colis, visible du départ à l'arrivée.",
    icon: MapPin,
  },
  {
    title: "Kasiman vérifiés",
    description: "Chaque conducteur est identifié, noté et reconnu.",
    icon: BadgeCheck,
  },
  {
    title: "Prix connu à l'avance",
    description: "Le tarif s'affiche avant de confirmer, pas à l'arrivée.",
    icon: Receipt,
  },
  {
    title: "Paiement simple",
    description: "Mobile money ou espèces, au choix, sans surprise.",
    icon: Wallet,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards motion-reduce:animate-none flex items-center gap-3 duration-700">
            <SpeedDashes />
            <span className="text-kasi-ink font-mono text-xs font-medium tracking-[0.2em] uppercase">
              La vitesse sénégalaise
            </span>
          </div>

          <h1 className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards motion-reduce:animate-none text-foreground mt-5 max-w-160 text-4xl tracking-tight duration-700 [animation-delay:100ms] md:text-5xl lg:text-6xl">
            Faites bouger Dakar<span className="text-kasi">.</span>
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards motion-reduce:animate-none text-muted-foreground mt-5 max-w-130 text-lg leading-snug duration-700 [animation-delay:200ms] md:text-2xl">
            Une course, un colis, une tournée d&apos;entreprise — la même app,
            la même vitesse, le même suivi en temps réel.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards motion-reduce:animate-none mt-8 flex flex-wrap items-center gap-4 duration-700 [animation-delay:300ms] lg:flex-nowrap">
            <Button size="lg" asChild>
              <Link href="/#telecharger">Être prévenu au lancement</Link>
            </Button>
            <Button
              size="lg"
              className="hover:bg-kasi hover:text-kasi-foreground"
              asChild
            >
              <Link href="/contact" className="group">
                Kasi pour les entreprises
                <ArrowRight className="stroke-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right side - Promesses */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {promises.map((promise) => {
            const Icon = promise.icon;
            return (
              <div key={promise.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-primary mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {promise.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {promise.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Photo - un client suit sa course */}
      <div className="animate-in fade-in fill-mode-backwards motion-reduce:animate-none mt-12 duration-1000 [animation-delay:350ms] max-lg:ml-6 max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[420px] w-full md:h-[560px] lg:h-[640px]">
          <Image
            src="/kasi/hero-client.jpg"
            alt="Un client souriant à l'arrière d'une voiture Kasi"
            fill
            priority
            className="rounded-2xl object-cover object-[50%_30%] shadow-lg max-lg:rounded-tr-none max-lg:rounded-br-none"
          />

          {/* Chip suivi en direct */}
          <div className="bg-background/90 absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border px-4 py-3 shadow-md backdrop-blur-md md:bottom-8 md:left-8">
            <span className="relative flex size-2.5 shrink-0">
              <span className="bg-kasi absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 motion-reduce:hidden" />
              <span className="bg-kasi relative inline-flex size-2.5 rounded-full" />
            </span>
            <div>
              <p className="text-muted-foreground font-mono text-[10px] tracking-[0.18em] uppercase">
                Suivi en direct
              </p>
              <p className="text-sm font-semibold">
                Votre Kasiman arrive — 4 min
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
