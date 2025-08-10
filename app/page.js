import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Gallery from "@/components/Gallery";
import Callout from "@/components/Callout";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <FeatureCards />
      <Gallery />
      <div className="hr container" />
      <Callout />
      <Footer />
    </>
  );
}
