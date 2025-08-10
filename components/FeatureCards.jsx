import Image from "next/image";

const items = [
  {
    title: "Garba",
    desc: "Thon frit croustillant, attiéké, piment.",
    img: "/images/garba.jpg",
    price: "85,000 GNF",
  },
  {
    title: "Attiéké Poisson",
    desc: "Couscous de manioc, poisson braisé, oignons.",
    img: "/images/attieke.jpg",
    price: "95,000 GNF",
  },
  {
    title: "Foutou Banane",
    desc: "Foutou plantain, sauce graine/arachide.",
    img: "/images/foutou-banane.jpg",
    price: "110,000 GNF",
  },
];

export default function FeatureCards() {
  return (
    <section className="section">
      <h2 className="h2">Nos Plats Vedettes</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.title}
            className="card overflow-hidden transition hover:shadow-glow"
          >
            <div className="relative h-56 w-full">
              <Image
                src={it.img}
                alt={it.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink2/70 via-transparent to-transparent"></div>
              <div className="absolute right-3 top-3 rounded-md bg-ink/70 px-2 py-1 text-xs font-semibold text-gold shadow-glow">
                {it.price}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-stone">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
