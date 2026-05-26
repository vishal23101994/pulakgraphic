"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-4 z-50 px-4">

      <div className="max-w-7xl mx-auto px-4 pt-4">

        <div
          className="
            h-[84px]
            rounded-[28px]

            bg-white/10
            backdrop-blur-[24px]

            border
            border-white/20

            shadow-[0_10px_50px_rgba(0,0,0,0.12)]

            px-8

            flex
            items-center
            justify-between

            transition-all
            duration-300

            hover:bg-white/15
          "
        >

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-4 shrink-0"
          >
            <div
              className="
                w-[62px]
                h-[62px]
                rounded-full
                overflow-hidden
                ring-2
                ring-white/30
                shadow-lg
                hover:scale-105
                transition
              "
            >
              <Image
                src="/logo1.png"
                alt="Pulak Graphics"
                width={62}
                height={62}
                className="object-cover"
                priority
              />
            </div>

            {/* ONE LINE TEXT */}
            <div className="hidden sm:block">
              <h1
                className="
                  text-[30px]
                  font-black
                  leading-none
                  tracking-tight
                  whitespace-nowrap
                "
              >
                <span className="font-serif text-black">
                  Pulak
                </span>

                <span className="font-serif text-blue-600 ml-2">
                  Graphics
                </span>
              </h1>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-2

              bg-white/10
              backdrop-blur-xl
              border
              border-white/10

              rounded-full
              p-2
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  font-medium
                  transition
                  ${
                    pathname === link.path
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-800 hover:bg-white hover:text-blue-600"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-3">

            <Link
              href="/contact"
              className="
                hidden
                md:inline-flex
                items-center
                px-7
                py-3
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                font-semibold
                shadow-lg
                hover:-translate-y-0.5
                hover:shadow-blue-300
                transition
              "
            >
              Get Quote →
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden
                w-11
                h-11
                rounded-full
                bg-slate-100
                flex
                items-center
                justify-center
              "
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            open
              ? "max-h-[500px]"
              : "max-h-0"
          }
        `}
      >
        <div
          className="
            mx-4
            mt-3
            bg-white
            rounded-3xl
            shadow-xl
            p-5
          "
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`
                block
                p-4
                rounded-2xl
                mb-2
                ${
                  pathname === link.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-50"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="
              block
              text-center
              mt-3
              py-4
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              font-semibold
            "
          >
            Get Quote
          </Link>

        </div>
      </div>

    </nav>
  );
}