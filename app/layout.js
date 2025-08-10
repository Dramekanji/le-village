import "./globals.css";

export const metadata = {
  title: "Le Village – Restaurant Africain",
  description:
    "Garba, Attiéké, Foutou banane et plus. Preparés avec soin, finesse, et hospitalité.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-stone pt-20">{children}</body>
    </html>
  );
}
