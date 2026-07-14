import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            {
              src: "/kasi/course-taximan.jpg",
              alt: "Un taximan de Dakar au volant, souriant",
            },
            {
              src: "/kasi/kasiman-taxi.jpg",
              alt: "Une cliente rejoint un taxi de quartier",
            },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Les Kasiman"
          paragraphs={[
            "Le taximan qui connaît chaque quartier de Dakar depuis quinze ans n'a pas besoin qu'on le remplace par une app importée. Il a besoin d'un outil qui le rend visible, réservable, noté, payé simplement.",
            "C'est l'inverse de ce que font les plateformes qui recrutent des chauffeurs de zéro : Kasi part de la flotte réelle, celle qui est déjà dans les rues, et lui donne la technologie qu'elle mérite.",
            "Moto, taxi ou camionnette : toute personne qui roule pour Kasi est un Kasiman — un badge commun, une réputation commune, un revenu plus stable.",
          ]}
          ctaButton={{
            href: "/contact",
            text: "Devenir Kasiman",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "Kasi ne construit pas une flotte à partir de zéro pour concurrencer ce qui existe : Kasi digitalise ce qui roule déjà. Trois usages — des personnes qui bougent, des choses qui bougent, des tournées d'entreprise — organisés par la même technologie de géolocalisation et de confiance.",
            "Le client retrouve toujours la même promesse : rapidité, suivi en temps réel, sécurité. L'entreprise gagne une flotte logistique fiable sans jamais avoir à la recruter. Et derrière chaque course, il y a un Kasiman reconnu, noté et protégé par les mêmes standards.",
          ]}
        />
        <ImageSection
          images={[
            {
              src: "/kasi/livraison-kasiman.jpg",
              alt: "Un livreur à moto, colis en main",
            },
            {
              src: "/kasi/business-client.jpg",
              alt: "Un professionnel monte dans un taxi",
            },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
