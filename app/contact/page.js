import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export const metadata = { title: "Contact – Le Village" };
export default function ContactPage() {
  return (
    <>
      <NavBar />
      <section className="container py-16">
        <h1 className="font-display text-5xl text-gold">Contactez-nous</h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="rounded-lg bg-ink2 p-6">
            <h3 className="font-semibold text-white">Visit Us</h3>
            <p className="mt-2 text-sm">
              Nongo, Conakry, Guinea
              <br />
              +224 000 00 00 00
              <br />
              levillage@restaurant.gn
            </p>
            <div className="mt-6">
              <a href="https://wa.me/224000000000" className="btn">
                WhatsApp
              </a>
            </div>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-md">
              <iframe
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d0!2d-13.595!3d9.641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sConakry!5e0!3m2!1sen!2s!4v0000000000"
              />
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-md bg-ink2 p-3 outline-none focus:ring-2 focus:ring-gold"
                placeholder="First Name"
              />
              <input
                className="rounded-md bg-ink2 p-3 outline-none focus:ring-2 focus:ring-gold"
                placeholder="Last Name"
              />
            </div>
            <input
              className="w-full rounded-md bg-ink2 p-3 outline-none focus:ring-2 focus:ring-gold"
              placeholder="Email"
            />
            <input
              className="w-full rounded-md bg-ink2 p-3 outline-none focus:ring-2 focus:ring-gold"
              placeholder="Phone"
            />
            <textarea
              rows={5}
              className="w-full rounded-md bg-ink2 p-3 outline-none focus:ring-2 focus:ring-gold"
              placeholder="Your Message"
            />
            <button className="btn">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
