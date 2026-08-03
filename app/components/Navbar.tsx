"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "ראשי", href: "/" },
  { name: "אודות", href: "/about" },
  { name: "שירותים", href: "/#services" },
  { name: "פרויקטים", href: "/#projects" },
  { name: "צור קשר", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#090d12]/95 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
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
              className="font-medium text-white/80 transition-all duration-300 hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}