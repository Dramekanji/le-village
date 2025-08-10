"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[999] bg-ink border-b border-white/10 shadow-soft">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl text-gold">
          Le Village Logo
        </Link>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="uppercase text-xs tracking-widest text-stone hover:text-gold"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="uppercase text-xs tracking-widest text-stone hover:text-gold"
              >
                À Propos
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="uppercase text-xs tracking-widest text-stone hover:text-gold"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="uppercase text-xs tracking-widest text-stone hover:text-gold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Book a Table button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/224000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-gold px-5 py-3 text-ink font-semibold hover:brightness-105 active:brightness-95"
          >
            Reservez une Table
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded border border-gold px-3 py-2 text-gold"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-ink border-t border-white/10 md:hidden">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <Link
                  href="/"
                  className="uppercase text-xs tracking-widest text-stone hover:text-gold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="uppercase text-xs tracking-widest text-stone hover:text-gold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="uppercase text-xs tracking-widest text-stone hover:text-gold"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="uppercase text-xs tracking-widest text-stone hover:text-gold"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/224000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-gold px-5 py-3 text-ink font-semibold hover:brightness-105 active:brightness-95"
                >
                  Reservez une Table
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
