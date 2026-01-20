"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#086BAF] text-white">
      <div className="flex items-center justify-between px-5 h-16">
        {/* Logo */}
        <h2 className="text-2xl md:text-3xl font-bold">
          Geek Support Pro
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Book Appointment", href: "/Appointment" },
            { name: "Contact Us", href: "/contact" },
          ].map((item) => (
            <li key={item.name} className="hover:text-gray-300">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-5 pb-4 bg-[#086BAF] font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Book Appointment", href: "/Appointment" },
            { name: "Contact Us", href: "/contact" },
          ].map((item) => (
            <li
              key={item.name}
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
