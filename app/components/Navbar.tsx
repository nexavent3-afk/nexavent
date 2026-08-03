"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "ראשי", href: "#" },
  { name: "שירותים", href: "#services" },
  { name: "פרויקטים", href: "#projects" },
  { name: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);return (
  <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[#090d12]/95 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
    }`}
  >
    <div className="mx-auto max-w-7xl h-24 flex items-center justify-between px-8">

      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="NexaVent"
          width={140}
          height={55}
          style={{ width: "140px", height: "auto" }}
          priority
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-10">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <a
        href="https://wa.me/"
        className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-black hover:bg-cyan-400 transition-all duration-300"
      >
        קבל הצעת מחיר
      </a>

    </div>
  </header>
);
}