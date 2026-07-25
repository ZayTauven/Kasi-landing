import Image from "next/image";

import { cn } from "@/lib/utils";

type Member = {
  name: string;
  role: string;
  image: string;
  /** Cadrage du portrait dans la bulle */
  objectPosition?: string;
};

const members: Member[] = [
  {
    name: "Moctar KIPRE",
    role: "Fondateur",
    image: "/kasi/team/moctar-kipre.png",
  },
  {
    name: "Pierre CISS",
    role: "Équipe fondatrice",
    image: "/kasi/team/pierre-cisse.jpg",
  },
  {
    name: "Tito GBEDJEHA",
    role: "Équipe fondatrice",
    image: "/kasi/team/tito-gbedjeha.png",
  },
  {
    name: "Mohamed ZAYAD",
    role: "Équipe fondatrice",
    image: "/kasi/team/mohamed-zayad.jpg",
  },
];

export const Team = () => {
  return (
    <section className="container pt-28 lg:pt-32">
      <div className="text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          L&apos;équipe derrière Kasi
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl leading-snug">
          Une petite équipe basée à Dakar, obsédée par le dernier kilomètre — et
          par ceux qui le font rouler.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 lg:grid-cols-4 lg:gap-10">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-4">
            <div className="relative size-28 overflow-hidden rounded-full md:size-32 lg:size-36">
              <Image
                src={member.image}
                alt={`Portrait de ${member.name}`}
                fill
                className={cn("object-cover", member.objectPosition)}
              />
            </div>
            <div className="text-center">
              <div className="font-display text-lg leading-tight font-bold">
                {member.name}
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
