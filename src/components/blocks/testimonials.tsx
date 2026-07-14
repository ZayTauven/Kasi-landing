import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { SpeedDashes } from "@/components/kasi-brand";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Persona = {
  quote: string;
  persona: string;
  detail: string;
  initials: string;
  /** Photo de la vraie personne — à renseigner quand les témoignages seront collectés */
  image?: string;
};

const personas: Persona[] = [
  {
    quote:
      "Je n'ai rien changé : ni ma voiture, ni mon quartier. Je suis juste devenu réservable.",
    persona: "Le taximan",
    detail: "Quinze ans de Médina au compteur",
    initials: "TX",
  },
  {
    quote:
      "Je vois le prix, je vois le Kasiman, je vois où il est. Je n'attends plus au hasard.",
    persona: "La cliente pressée",
    detail: "Plateau ↔ Almadies, tous les jours",
    initials: "CL",
  },
  {
    quote:
      "Mes colis partent le matin et mes clients suivent la moto en direct.",
    persona: "L'e-commerçante",
    detail: "Boutique en ligne, livraisons en ville",
    initials: "EC",
  },
  {
    quote:
      "Nos factures tournent chaque fin de mois sans qu'on gère un seul véhicule.",
    persona: "La PME",
    detail: "Tournée entreprise récurrente",
    initials: "PM",
  },
];

const items = [...personas, ...personas];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Pensé pour ceux qui font bouger Dakar
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Le client qui commande, le taximan qui roule, l&apos;entreprise
              qui livre : Kasi retire la friction, chacun garde son rôle.
            </p>
            <Button variant="outline" className="shadow-md" asChild>
              <Link href="/about">
                Découvrir la vision Kasi <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full min-h-[288px] flex-col justify-between gap-10 p-6 lg:min-h-[328px]">
                        <div className="space-y-5">
                          <SpeedDashes />
                          <blockquote className="font-display text-lg leading-tight! font-medium md:text-xl lg:text-2xl">
                            «&nbsp;{item.quote}&nbsp;»
                          </blockquote>
                        </div>
                        <div className="flex items-center gap-3">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.persona}
                              width={48}
                              height={48}
                              className="size-12 shrink-0 rounded-full object-cover"
                            />
                          ) : (
                            <div
                              aria-hidden="true"
                              className="bg-primary/10 text-primary font-display grid size-12 shrink-0 place-items-center rounded-full text-sm tracking-wide"
                            >
                              {item.initials}
                            </div>
                          )}
                          <div className="space-y-0.5">
                            <div className="text-primary font-semibold">
                              {item.persona}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {item.detail}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
