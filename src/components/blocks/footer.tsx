import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { KasiWordmark } from "@/components/kasi-brand";
import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Services", href: "/#usages" },
    { name: "Kasiman", href: "/#kasiman" },
    { name: "À propos", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const legal = [{ name: "Politique de confidentialité", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div
        id="telecharger"
        className="container scroll-mt-28 space-y-3 text-center"
      >
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Prêt à faire bouger Dakar ?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          L&apos;application Kasi arrive sur iOS et Android. Laissez-nous votre
          contact pour être prévenu au lancement — ou parlez-nous dès
          maintenant de vos tournées d&apos;entreprise.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">Être prévenu au lancement</Link>
          </Button>
          <Button size="lg" variant="outline" className="mt-4" asChild>
            <Link href="/contact">Devenir Kasiman</Link>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} Kasi. La vitesse sénégalaise, portée
          par ceux qui la font déjà.
        </p>
      </nav>

      <div className="w-full overflow-hidden">
        <div className="flex w-full justify-center">
          <KasiWordmark
            className="text-primary -mb-[0.22em] text-[clamp(7rem,26vw,20rem)] [mask-image:linear-gradient(180deg,black_30%,transparent_92%)]"
            dotClassName="bg-kasi top-auto bottom-[0.8em]"
          />
        </div>
      </div>
    </footer>
  );
}
