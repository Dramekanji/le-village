import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative z-0 min-h-[85vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-african-food.jpg"
          alt="African food hero background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Left shadow gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8), transparent 40%)",
          }}
        ></div>
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-ink/80" />
      </div>

      {/* Hero content */}
      <div className="container relative pb-24 pt-16">
        <span className="uppercase text-xs tracking-widest text-stone">
          Conakry • Cuisine Africaine
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mt-3">
          Soyez Les Bienvenues au <span className="text-gold">Village</span>
        </h1>
        <p className="mt-4 max-w-2xl text-stone/90">
          Garba, Attiéké, Foutou banane et plus. Preparés avec soin, finesse, et
          hospitalité.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/menu"
            className="inline-block rounded-md bg-gold px-5 py-3 text-ink font-semibold hover:brightness-105"
          >
            View Menu
          </Link>
          <a
            href="tel:+224000000000"
            className="inline-block rounded-md border border-gold px-5 py-3 text-gold hover:bg-gold hover:text-ink"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
