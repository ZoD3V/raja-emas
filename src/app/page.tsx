import Hero from "@/components/Hero";
import Logos from "@/components/Feature";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import CTASosmed from "@/components/CTASosmed";
import Contribution from "@/components/Contribution";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import OurLocation from "@/components/OurLocation";
import ChatPopup from "@/components/ChatPopup";

const HomePage: React.FC = () => {
  return (
    <>
      <ChatPopup />
      <Hero />
      <section className="w-full h-full bg-primary-50">
        <Container>
          <Logos />
        </Container>
        <Pricing />
      </section>
      <OurLocation />
      <CTASosmed />
      <Testimonials />
      <Contribution />
      <section className="w-full h-full bg-primary-50">
        <Container>
          <CTA />
        </Container>
      </section>
    </>
  );
};

export default HomePage;
