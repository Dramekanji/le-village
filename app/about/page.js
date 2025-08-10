import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
export const metadata = { title: "About – Le Village" };
export default function AboutPage() {
  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="container py-20">
          <h1 className="font-display text-5xl text-gold py-12">About Us</h1>
          <p className="mt-4 max-w-3xl text-stone py-12">
            <span className="text-gold">Au Village,</span> la cuisine est bien
            plus qu’un repas, c’est une tradition familiale. Fièrement tenu par
            notre famille, nous apportons plus de 20 ans d’expérience dans le
            domaine de la restauration à notre tout nouveau restaurant à
            Conakry. Inspirée par les saveurs vibrantes de l’Afrique, notre
            cuisine repose sur des recettes transmises de génération en
            génération, préparées avec le même soin et la même chaleur qu’à la
            maison. Que ce soit votre première visite ou la centième, nous vous
            accueillons comme un membre de notre{" "}
            <span className="text-gold">Village</span>.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-soft">
              <Image
                src="/images/african-chefs.jpg"
                alt="Interior view"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-soft">
              <Image
                src="/images/african-chefs-2.webp"
                alt="Dining space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
