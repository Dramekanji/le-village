export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h4 className="font-display text-xl text-gold">Le Village</h4>
          <p className="mt-2 text-sm">
            Nongo, Conakry • West African cuisine crafted with care.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-gold">Hours</h5>
          <p className="mt-2 text-sm leading-7">
            Mon–Thu: 11:00–23:00
            <br />
            Fri–Sat: 11:00–01:00
            <br />
            Sun: 11:00–23:00
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-gold">Contact</h5>
          <p className="mt-2 text-sm leading-7">
            +224 555 00 00 00
            <br />
            levillage@restaurant.gn
            <br />
            Nongo, Conakry, GN
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-stone">
        © {new Date().getFullYear()} Le Village • All rights reserved.
      </div>
    </footer>
  );
}
