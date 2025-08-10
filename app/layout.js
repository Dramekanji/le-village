import "./globals.css";

export const metadata = {
  title: "Le Village – Restaurant Africain",
  description:
    "Garba, Attiéké, Foutou banane and more—crafted with love at Le Village.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-stone pt-20">{children}</body>
    </html>
  );
}
