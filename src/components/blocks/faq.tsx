import Link from "next/link";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Vos courses et livraisons",
    questions: [
      {
        question: "Dans quelles zones Kasi fonctionne-t-il ?",
        answer:
          "Kasi démarre à Dakar et sa région. L'application vous indique toujours si votre adresse est couverte, et les zones s'étendront au fil du déploiement.",
      },
      {
        question: "Comment payer ma course ou ma livraison ?",
        answer:
          "Par mobile money ou en espèces, au choix. Le prix s'affiche avant la confirmation : ce que vous voyez est ce que vous payez.",
      },
      {
        question: "Puis-je suivre un colis que j'envoie ?",
        answer:
          "Oui. Chaque course et chaque colis est géolocalisé en temps réel, du ramassage jusqu'à la remise au destinataire.",
      },
    ],
  },
  {
    title: "Kasiman",
    questions: [
      {
        question: "Comment devenir Kasiman ?",
        answer:
          "Vous roulez déjà — taxi, moto ou camionnette ? Contactez-nous : après vérification de votre identité et de votre véhicule, vous recevez votre badge et l'application conducteur.",
      },
      {
        question: "Dois-je changer de véhicule ou de métier ?",
        answer:
          "Non. Kasi digitalise la flotte qui roule déjà : vous gardez votre véhicule, votre quartier et vos habitudes — vous gagnez la visibilité, la réputation et un revenu plus stable.",
      },
    ],
  },
  {
    title: "Entreprises",
    questions: [
      {
        question: "Comment fonctionnent les tournées pour entreprises ?",
        answer:
          "Vous confiez vos livraisons récurrentes — factures, colis, commandes e-commerce — et Kasi affecte des Kasiman fiables à vos tournées, avec suivi en temps réel et preuve de remise.",
      },
      {
        question: "Faut-il gérer une flotte ?",
        answer:
          "Jamais. C'est la promesse : la logistique du dernier kilomètre avec la rigueur d'une flotte dédiée, sans avoir à la recruter ni à la gérer.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Des questions ?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Des questions ?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Si la réponse n&apos;est pas ici,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                écrivez-nous
              </Link>
              .
            </p>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/kasi/kasi-lady.jpg"
                alt="Un Kasiman consulte la course sur son téléphone, au volant de son taxi"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
