import React from "react";

import Link from "next/link";

import { Facebook, Instagram, Linkedin } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Nous trouver",
    content: (
      <p className="text-muted-foreground mt-3">
        Dakar, Sénégal
        <br />
        Partout où la ville bouge
      </p>
    ),
  },
  {
    title: "Nous écrire",
    content: (
      <div className="mt-3">
        <div>
          <p className="">Clients &amp; entreprises</p>
          <Link
            href="mailto:contact@kasi.sn"
            className="text-muted-foreground hover:text-foreground"
          >
            contact@kasi.sn
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Futurs Kasiman</p>
          <Link
            href="mailto:kasiman@kasi.sn"
            className="text-muted-foreground hover:text-foreground"
          >
            kasiman@kasi.sn
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Nous suivre",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Instagram className="size-5" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="size-5" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Parlons-en
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Une course à organiser, une flotte à digitaliser, ou l&apos;envie de
          devenir Kasiman : dites-nous tout.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Formulaire */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Votre message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
