import Image from "next/image";

import { cn } from "@/lib/utils";

type Partner = {
  name: string;
  /** Chemin du logo dans /public — laisser undefined tant que le logo n'est pas fourni */
  logo?: string;
  width?: number;
  height?: number;
};

const partners: Partner[] = [
  { name: "Partenaire 1" },
  { name: "Partenaire 2" },
  { name: "Partenaire 3" },
  { name: "Partenaire 4" },
  { name: "Partenaire 5" },
];

export const Partners = () => {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-14">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Ils s&apos;apprêtent à bouger avec nous.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Commerçants, paiement mobile et institutions de l&apos;écosystème
              dakarois.
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 lg:gap-x-20">
          {partners.map((partner, i) =>
            partner.logo ? (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={partner.width ?? 130}
                height={partner.height ?? 32}
                className="object-contain opacity-60 transition-opacity hover:opacity-90 dark:invert"
              />
            ) : (
              <div
                key={partner.name}
                className={cn(
                  "bg-foreground/5 h-9 rounded-md",
                  ["w-28", "w-36", "w-24", "w-32", "w-28"][i % 5],
                )}
              >
                <span className="sr-only">{partner.name} — logo à venir</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
