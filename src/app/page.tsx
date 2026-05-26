"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaPalette,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

import { motion } from "framer-motion";


const features = [
  {
    icon: <FaStar />,
    title: "Premium Quality",
    text: "High-end quality with modern technology.",
  },

  {
    icon: <FaPalette />,
    title: "Creative Team",
    text: "Innovative designers and media professionals.",
  },

  {
    icon: <FaTruck />,
    title: "On-Time Delivery",
    text: "Every project delivered on schedule.",
  },

  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    text: "Always available for assistance.",
  },
];

export default function Home() {
  return (
    <>

      {/* HERO */}

      <section className="relative min-h-screen -mt-[110px] overflow-hidden">

        {/* BG */}

        <Image
          src="/images/home-hero1.png"
          alt="Pulak Graphics"
          fill
          priority
          className="
            object-cover
            scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        {/* Lights */}

        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="relative z-20 min-h-screen flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

              {/* LEFT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >

                {/* Heading */}

                <h1
                  className="
                    text-6xl
                    md:text-8xl
                    lg:text-[58px]
                    font-black
                    font-serif
                    text-white
                    tracking-normal
                    whitespace-nowrap
                  "
                >
                  <span>Pulak</span>

                  <span
                    className="
                      ml-4
                      bg-gradient-to-r
                      from-blue-400
                      to-cyan-300
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Graphics
                  </span>
                </h1>

                {/* Description */}

                <p
                  className="
                    mt-10
                    font-serif
                    text-xl
                    md:text-2xl
                    text-white/85
                    max-w-3xl
                    leading-relaxed
                  "
                >
                  Print • Publication • Media • Live Coverage

                  <br />

                  Creative solutions that transform ideas into
                  impactful visual experiences.
                </p>

                {/* Buttons */}

                <div className="mt-12 flex flex-wrap gap-5">

                  <Link
                    href="/services"
                    className="
                      px-10
                      py-5

                      rounded-full

                      bg-gradient-to-r
                      from-blue-600
                      to-cyan-500

                      text-white
                      font-semibold

                      shadow-[0_20px_60px_rgba(59,130,246,.45)]

                      hover:scale-105

                      transition
                    "
                  >
                    Explore Services →
                  </Link>

                  <Link
                    href="/contact"
                    className="
                      px-10
                      py-5

                      rounded-full

                      bg-white/10
                      backdrop-blur-xl

                      border
                      border-white/20

                      text-white

                      hover:bg-white/20

                      transition
                    "
                  >
                    Contact Us
                  </Link>

                </div>

              </motion.div>

              {/* RIGHT CARD */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: .3,
                  duration: 1,
                }}
                className="hidden lg:block"
              >

                <div
                  className="
                    rounded-[40px]

                    bg-white/10

                    backdrop-blur-2xl

                    border
                    border-white/20

                    p-10

                    shadow-[0_30px_100px_rgba(0,0,0,.25)]
                  "
                >

                  <div className="space-y-8">

                    <div>
                      <p className="text-white/60">
                        Services
                      </p>

                      <h3 className="text-white text-4xl font-black">
                        4+
                      </h3>
                    </div>

                    <div>
                      <p className="text-white/60">
                        Creative Projects
                      </p>

                      <h3 className="text-white text-4xl font-black">
                        500+
                      </h3>
                    </div>

                    <div>
                      <p className="text-white/60">
                        Customer Support
                      </p>

                      <h3 className="text-white text-4xl font-black">
                        24/7
                      </h3>
                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="relative py-36 px-6 overflow-hidden">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100 blur-[220px] rounded-full opacity-60" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100 blur-[220px] rounded-full opacity-60" />

        <div className="relative max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-24 items-center">

            <motion.div
              whileHover={{ scale: 1.02 }}
            >

              <div className="relative">

                <Image
                  src="/images/9.png"
                  alt="Pulak Graphics"
                  width={500}
                  height={750}
                  className="
                    rounded-[40px]
                    shadow-[0_50px_120px_rgba(0,0,0,.18)]
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-3
                    -right-2

                    rounded-[32px]

                    bg-white

                    p-8

                    shadow-2xl
                  "
                >

                  <h3 className="text-3xl font-black text-blue-600">
                    20+
                  </h3>

                  <p className="text-gray-600">
                    Years Of Creativity
                  </p>

                </div>

              </div>

            </motion.div>

            <div>

              <div
                className="
                  inline-flex

                  px-5
                  py-3

                  rounded-full

                  bg-blue-100

                  text-blue-700

                  font-semibold

                  mb-8
                "
              >
                PULAK GRAPHICS
              </div>

              <h2
                className="
                  text-5xl
                  md:text-7xl

                  font-black

                  leading-tight

                  mb-10
                "
              >
                Transforming Ideas Into Powerful Visual Experiences
              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Pulak Graphics delivers complete creative,
                print, publication, media and event coverage
                services for businesses, brands and organizations.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-12">

                We believe every project deserves originality,
                attention to detail and premium execution.
                From concept development to final delivery,
                our team ensures quality at every stage.

              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">

                {[
                  "Creative Design",
                  "Premium Printing",
                  "Media Production",
                  "Fast Delivery",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-600" />

                    <span className="text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <Link
                href="/about"
                className="
                  inline-flex

                  px-10
                  py-5

                  rounded-full

                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500

                  text-white

                  font-semibold

                  hover:scale-105

                  transition
                "
              >
                Discover More →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="py-30 px-6 bg-[#f8fbff]">

      <div className="max-w-7xl mx-auto">

      <div className="text-center mb-28">

      <h2 className="text-6xl font-black mb-8">
      Our Creative Workflow
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto">

      A structured process that turns ideas
      into memorable creative experiences.

      </p>

      </div>

      <div className="grid lg:grid-cols-4 gap-10">

      {[
      ["01","Consultation","Understanding goals and requirements"],
      ["02","Planning","Building concepts and visual strategy"],
      ["03","Execution","Producing premium creative assets"],
      ["04","Delivery","Final quality review and launch"],
      ].map(([n,t,d])=>(

      <div
      key={n}
      className="
      group

      bg-white

      rounded-[36px]

      p-10

      shadow-xl

      hover:-translate-y-4

      transition
      "
      >

      <div
      className="
      text-[90px]

      font-black

      text-blue-100

      group-hover:text-blue-500

      transition

      mb-8
      "
      >
      {n}
      </div>

      <h3 className="text-3xl font-black mb-5">
      {t}
      </h3>

      <p className="text-gray-600 leading-8">
      {d}
      </p>

      </div>

      ))}

      </div>

      </div>

      </section>

      {/* STATS */}

      <section className="py-36 px-6">

      <div className="max-w-7xl mx-auto">

      <div
      className="
      rounded-[50px]

      overflow-hidden

      bg-gradient-to-r
      from-[#07111f]
      to-[#0f2744]

      p-20

      text-white
      "
      >

      <div className="text-center mb-20">

      <h2 className="text-6xl font-black mb-8">
      Our Achievements
      </h2>

      <p className="text-white/70">
      Numbers that represent trust and quality.
      </p>

      </div>

      <div className="grid md:grid-cols-4 gap-10">

      {[
      ["500+","Projects Completed"],
      ["300+","Happy Clients"],
      ["20+","Years Experience"],
      ["24/7","Support"],
      ].map(([n,l])=>(

      <div
      key={l}
      className="text-center"
      >

      <h3 className="text-7xl font-black mb-5">
      {n}
      </h3>

      <p className="text-white/70">
      {l}
      </p>

      </div>

      ))}

      </div>

      </div>

      </div>

      </section>

      {/* CTA */}

      <section className="pb-36 px-6">

      <div className="max-w-6xl mx-auto">

      <div
      className="
      rounded-[50px]

      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-blue-700

      p-24

      text-center

      text-white
      "
      >

      <h2
      className="
      text-6xl

      font-black

      mb-10
      "
      >
      Let's Build Something Extraordinary
      </h2>

      <p
      className="
      text-2xl

      max-w-3xl

      mx-auto

      mb-12

      text-white/90
      "
      >

      Partner with Pulak Graphics and transform
      your ideas into premium visual experiences.

      </p>

      <div className="flex justify-center gap-5 flex-wrap">

      <Link
      href="/contact"
      className="
      px-10
      py-5

      rounded-full

      bg-white

      text-blue-700

      font-bold
      "
      >
      Start Your Project
      </Link>

      <Link
      href="/portfolio"
      className="
      px-10
      py-5

      rounded-full

      border
      border-white

      text-white
      "
      >
      View Portfolio
      </Link>

      </div>

      </div>

      </div>

      </section>

      {/* FEATURES */}

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((f) => (
            <div
              key={f.title}
              className="
                bg-gradient-to-b
                from-white
                to-slate-50
                rounded-[30px]
                p-8
                shadow-xl
              "
            >
              <div className="text-5xl text-blue-600 mb-6">
                {f.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {f.title}
              </h3>

              <p className="text-gray-600">
                {f.text}
              </p>

            </div>
          ))}

        </div>

      </section>

    </>
  );
}