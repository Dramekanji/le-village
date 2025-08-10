import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const dishes = [
  { name: "Garba Classique", price: "85,000 GNF", desc: "Thon frit, attiéké, tomate, oignon, piment." },
  { name: "Attiéké Poisson Braisé", price: "95,000 GNF", desc: "Couscous de manioc, poisson braisé, sauce oignon." },
  { name: "Foutou Banane + Sauce Graine", price: "110,000 GNF", desc: "Foutou plantain avec sauce aux graines de palme." },
  { name: "Poulet Braisé + Alloco", price: "120,000 GNF", desc: "Poulet mariné, banane plantain frit, salade." }
];
const drinks = [
  { name: "Gingembre Maison", price: "25,000 GNF", desc: "Piquant, rafraîchissant." },
  { name: "Bissap", price: "25,000 GNF", desc: "Hibiscus, légèrement sucré." },
  { name: "Bouye (Baobab)", price: "28,000 GNF", desc: "Crémeux, fruit du baobab." },
  { name: "Café Touba", price: "20,000 GNF", desc: "Épices, chaleur et caractère." }
];
export const metadata = { title: "Menu – Le Village" };
export default function MenuPage() {
  return (<>
    <NavBar />
    <section className="container py-16">
      <h1 className="font-display text-5xl text-gold">The Menu</h1>
      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-white">Signature Dishes</h2>
          <ul className="mt-6 space-y-6">
            {dishes.map((i) => (
              <li key={i.name} className="border-b border-white/10 pb-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-white">{i.name}</h3>
                  <span className="text-gold">{i.price}</span>
                </div>
                <p className="mt-1 text-sm text-stone">{i.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl text-white">Mocktails & Drinks</h2>
          <ul className="mt-6 space-y-6">
            {drinks.map((i) => (
              <li key={i.name} className="border-b border-white/10 pb-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-white">{i.name}</h3>
                  <span className="text-gold">{i.price}</span>
                </div>
                <p className="mt-1 text-sm text-stone">{i.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <Footer />
  </>);
}
