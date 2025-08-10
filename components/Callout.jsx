export default function Callout() {
  return (
    <section className="container my-16 rounded-lg border border-gold/40 bg-ink2 p-8 text-center">
      <h3 className="font-display text-2xl text-white">
        Des Moments Exceptionnels Vous Attendent
      </h3>
      <p className="mt-2 text-stone py-20">
        Réservez une table pour le déjeuner ou le dîner. Nous proposons
        également la vente à emporter, la livraison et des événements privés.
      </p>

      <div>
        <a
          href="https://wa.me/224000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-gold px-5 py-3 text-ink font-semibold hover:brightness-105 active:brightness-95"
        >
          Reservez une Table
        </a>
      </div>
    </section>
  );
}
