import Image from "next/image";

export default function Gallery() {
  return (
    <section className="section">
      <h2 className="h2">Dans Le Village</h2>
      <div className="mt-8 grid grid-cols-6 gap-4">
        <div className="relative col-span-6 md:col-span-4 h-64 md:h-96 rounded-xl overflow-hidden border border-line">
          <Image
            src="/images/le-village-1.jpg"
            alt="Interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative col-span-6 md:col-span-2 h-64 md:h-96 rounded-xl overflow-hidden border border-line">
          <Image
            src="/images/le-village-2.jpg"
            alt="Dining"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
