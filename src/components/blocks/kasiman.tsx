import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { SpeedDashes } from "@/components/kasi-brand";
import { Button } from "@/components/ui/button";

const manifesto = [
  {
    title: "Le taximan devient réservable.",
    description:
      "Quinze ans de quartier au compteur, plus une app : visible, noté, payé simplement — sans changer de métier ni de véhicule.",
  },
  {
    title: "Le livreur devient reconnu.",
    description:
      "Un badge commun, une réputation qui le suit de course en course, des revenus plus stables.",
  },
  {
    title: "Personne n'est remplacé.",
    description:
      "Kasi digitalise la flotte qui roule déjà dans les rues de Dakar — il n'en importe pas une autre.",
  },
];

export const Kasiman = () => {
  return (
    <section id="kasiman" className="scroll-mt-20 pb-28 lg:pb-32">
      <div className="container">
        <h2 className="mx-auto max-w-3xl text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl">
          Kasiman. Une identité, pas un métier.
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center leading-snug">
          Moto, taxi historique du quartier ou camionnette de tournée : toute
          personne qui roule pour Kasi est un Kasiman — même badge, mêmes
          standards de sécurité, même reconnaissance.
        </p>

        <div className="mt-10 grid items-center gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/kasi/kasiman-app.jpg"
              alt="Un Kasiman consulte la course sur son téléphone, au volant de son taxi"
              fill
              className="object-cover"
            />
          </div>

          {/* Manifeste */}
          <div className="flex flex-col gap-8">
            {manifesto.map((item) => (
              <div key={item.title} className="flex gap-4">
                <SpeedDashes className="mt-2 shrink-0" />
                <div>
                  <h3 className="font-display text-xl leading-tight font-bold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-1.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Devenir Kasiman</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/about" className="group">
                  Lire notre vision
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
