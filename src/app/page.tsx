import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { HowItWorks } from "@/components/blocks/how-it-works";
import { Kasiman } from "@/components/blocks/kasiman";
import { Partners } from "@/components/blocks/partners";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Partners />
        <HowItWorks />
        <Features />
        <Kasiman />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <FAQ />
      </Background>
    </>
  );
}
