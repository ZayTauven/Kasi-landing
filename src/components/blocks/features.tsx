import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    id: "course",
    label: "Kasi Course",
    title: "Déplacez-vous dans Dakar",
    image: "/kasi/course-taximan.jpg",
    alt: "Un taximan souriant au volant de son taxi à Dakar",
    href: "/#telecharger",
  },
  {
    id: "livraison",
    label: "Kasi Livraison",
    title: "Envoyez tout ce qui doit arriver vite",
    image: "/kasi/livraison-kasiman.jpg",
    alt: "Un Kasiman à moto prêt à livrer des colis",
    href: "/#telecharger",
  },
  {
    id: "entreprises",
    label: "Kasi Entreprises",
    title: "Externalisez vos tournées",
    image: "/kasi/business-client.jpg",
    alt: "Un professionnel monte dans un taxi avec sa sacoche",
    href: "/contact",
  },
];

export const Features = () => {
  return (
    <section id="usages" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            PERSONNES · COLIS · ENTREPRISES
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Trois usages. Une seule infrastructure.
          </h2>
          <p className="text-muted-foreground leading-snug">
            Kasi ne vend pas une catégorie de véhicule ni un type de course :
            des personnes qui bougent, des choses qui bougent, organisées par
            la même technologie de géolocalisation et de confiance.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={item.id} className="flex flex-1 max-md:flex-col">
                <div id={item.id} className="flex-1 scroll-mt-32 p-4 md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-4 pt-4 md:pt-6"
                  >
                    <div>
                      <p className="text-kasi-ink font-mono text-xs font-medium tracking-[0.15em] uppercase">
                        {item.label}
                      </p>
                      <h3 className="font-display mt-1.5 max-w-60 text-2xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="rounded-full border p-2">
                      <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-8" />
                    </div>
                  </Link>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
