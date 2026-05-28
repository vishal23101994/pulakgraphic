"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

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

  /* CLOSE MENU ON ROUTE CHANGE */

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* NAVBAR */}

      <nav
        className="
          fixed
          top-0
          left-0
          w-full

          z-50

          px-3
          md:px-5

          pt-3
        "
      >

        <div className="max-w-7xl mx-auto">

          <div
            className="
              h-[74px]

              rounded-[28px]

              bg-white/85

              backdrop-blur-2xl

              border
              border-white/30

              shadow-[0_10px_60px_rgba(0,0,0,.08)]

              px-4
              md:px-7

              flex
              items-center
              justify-between
            "
          >

            {/* LEFT */}

            <Link
              href="/"
              className="
                flex
                items-center
                gap-3

                min-w-0
              "
            >

              {/* LOGO */}

              <div
                className="
                  relative

                  w-[52px]
                  h-[52px]

                  md:w-[60px]
                  md:h-[60px]

                  rounded-full

                  overflow-hidden

                  ring-2
                  ring-blue-100

                  shrink-0
                "
              >

                <Image
                  src="/logo1.png"
                  alt="Pulak Graphics"
                  fill
                  priority
                  className="object-cover"
                />

              </div>

              {/* TEXT */}

              <div className="min-w-0">

                <h1
                  className="
                    text-[21px]
                    md:text-[30px]

                    font-black

                    leading-none

                    tracking-tight

                    whitespace-nowrap
                  "
                >

                  <span className="font-serif text-slate-900">
                    Pulak
                  </span>

                  <span className="font-serif text-blue-600 ml-2">
                    Graphics
                  </span>

                </h1>

                <p
                  className="
                    hidden
                    sm:block

                    text-[11px]

                    text-slate-500

                    mt-1
                  "
                >
                  Print • Publication • Media
                </p>

              </div>

            </Link>

            {/* DESKTOP MENU */}

            <div
              className="
                hidden
                lg:flex

                items-center
                gap-2

                bg-slate-100/80

                border
                border-slate-200

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

                    text-sm
                    font-semibold

                    transition-all
                    duration-300

                    ${
                      pathname === link.path
                        ? `
                          bg-gradient-to-r
                          from-blue-600
                          to-cyan-500

                          text-white

                          shadow-lg
                        `
                        : `
                          text-slate-700

                          hover:bg-white
                          hover:text-blue-600
                        `
                    }
                  `}
                >
                  {link.name}
                </Link>

              ))}

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">

              {/* DESKTOP CTA */}

              <Link
                href="/contact"
                className="
                  hidden
                  lg:inline-flex

                  items-center
                  gap-2

                  px-6
                  py-3

                  rounded-full

                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500

                  text-white

                  text-sm
                  font-semibold

                  shadow-[0_10px_40px_rgba(59,130,246,.35)]

                  hover:scale-105

                  transition-all
                  duration-300
                "
              >
                Get Quote

                <ChevronRight size={18} />
              </Link>

              {/* MOBILE BUTTON */}

              <button
                onClick={() => setOpen(!open)}
                className="
                  lg:hidden

                  w-11
                  h-11

                  rounded-full

                  bg-slate-100

                  border
                  border-slate-200

                  flex
                  items-center
                  justify-center

                  text-slate-800

                  transition
                "
              >

                {open ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}

              </button>

            </div>

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}

      <div
        className={`
          fixed
          inset-0

          z-40

          lg:hidden

          transition-all
          duration-300

          ${
            open
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >

        {/* BACKDROP */}

        <div
          onClick={() => setOpen(false)}
          className="
            absolute
            inset-0

            bg-black/40

            backdrop-blur-sm
          "
        />

        {/* MENU PANEL */}

        <div
          className={`
            absolute
            top-0
            right-0

            h-full
            w-[85%]
            max-w-[360px]

            bg-white

            shadow-2xl

            transition-transform
            duration-300

            ${
              open
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* HEADER */}

          <div
            className="
              h-[82px]

              px-6

              border-b
              border-slate-100

              flex
              items-center
              justify-between
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  relative

                  w-[48px]
                  h-[48px]

                  rounded-full

                  overflow-hidden
                "
              >

                <Image
                  src="/logo1.png"
                  alt="Pulak Graphics"
                  fill
                  className="object-cover"
                />

              </div>

              <div>

                <h2
                  className="
                    text-xl

                    font-black
                  "
                >

                  <span className="font-serif">
                    Pulak
                  </span>

                  <span className="font-serif text-blue-600 ml-1">
                    Graphics
                  </span>

                </h2>

              </div>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="
                w-10
                h-10

                rounded-full

                bg-slate-100

                flex
                items-center
                justify-center
              "
            >
              <X size={20} />
            </button>

          </div>

          {/* LINKS */}

          <div className="p-5">

            <div className="space-y-2">

              {navLinks.map((link) => (

                <Link
                  key={link.name}
                  href={link.path}
                  className={`
                    flex
                    items-center
                    justify-between

                    px-5
                    py-4

                    rounded-2xl

                    font-semibold

                    transition-all
                    duration-300

                    ${
                      pathname === link.path
                        ? `
                          bg-gradient-to-r
                          from-blue-600
                          to-cyan-500

                          text-white
                        `
                        : `
                          text-slate-700

                          hover:bg-slate-100
                        `
                    }
                  `}
                >

                  {link.name}

                  <ChevronRight size={18} />

                </Link>

              ))}

            </div>

            {/* CTA */}

            <Link
              href="/contact"
              className="
                mt-6

                flex
                items-center
                justify-center
                gap-2

                w-full

                h-[56px]

                rounded-2xl

                bg-gradient-to-r
                from-blue-600
                to-cyan-500

                text-white

                font-semibold

                shadow-lg
              "
            >
              Get Quote

              <ChevronRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}