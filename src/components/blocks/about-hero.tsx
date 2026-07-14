import { DashedLine } from "@/components/dashed-line";

const pillars = [
  {
    value: "3 usages",
    label: "Personnes, colis, tournées d'entreprise",
  },
  {
    value: "1 infrastructure",
    label: "La même géolocalisation, la même confiance",
  },
  {
    value: "1 badge",
    label: "Kasiman, quelle que soit la monture",
  },
  {
    value: "0 remplacement",
    label: "On digitalise la flotte qui roule déjà",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            La ville va plus vite que ses routes
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Kasi est né de ce constat. Le nom le dit lui-même : Kasi,
            c&apos;est la vitesse.
          </p>

          <div className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            <p>
              À Dakar, se déplacer et faire déplacer une chose — un colis, un
              client, une facture — ne devrait pas prendre deux heures dans
              les embouteillages. On a commencé par la livraison à deux roues,
              parce que c&apos;était le geste le plus visible du problème.
            </p>
            <p>
              Mais la vitesse dont Dakar a besoin n&apos;est pas seulement
              celle d&apos;un colis qui arrive vite. C&apos;est celle
              d&apos;un secteur entier — le transport et la logistique du
              quotidien — qui doit se moderniser sans perdre ceux qui le font
              vivre depuis toujours.
            </p>
          </div>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {pillars.map((pillar) => (
            <div key={pillar.label} className="flex flex-col gap-1">
              <div className="font-display text-3xl tracking-wide md:text-4xl">
                {pillar.value}
              </div>
              <div className="text-muted-foreground">{pillar.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
