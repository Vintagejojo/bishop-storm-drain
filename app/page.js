import Hero from "./components/home/Hero";
import CallToAction from "./components/home/CallToAction";
import Contact from "./components/home/Contact";
import Services from "./components/home/Services"
import CarouselComponent from "./components/home/CarouselComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CarouselComponent />
      {/* <CallToAction /> */}
      <Contact />
    </>
  );
}