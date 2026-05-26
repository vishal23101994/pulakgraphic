"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaPrint,
  FaCamera,
  FaBroadcastTower,
  FaBookOpen,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPrint />,
    title: "Printing",
    color: "text-blue-600",
    desc: "Premium printing solutions for businesses and brands.",
  },

  {
    icon: <FaBookOpen />,
    title: "Publication",
    color: "text-purple-600",
    desc: "Creative publishing and modern content design services.",
  },

  {
    icon: <FaCamera />,
    title: "Media",
    color: "text-green-600",
    desc: "Photography, videography and promotional media content.",
  },

  {
    icon: <FaBroadcastTower />,
    title: "Live Coverage",
    color: "text-orange-600",
    desc: "Professional live streaming and event coverage services.",
  },
];

const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },

  {
    number: "20+",
    label: "Years Experience",
  },

  {
    number: "300+",
    label: "Happy Clients",
  },

  {
    number: "24/7",
    label: "Customer Support",
  },
];

export default function About() {
  return (
    <>

      {/* HERO */}

      <section className="relative min-h-screen -mt-[110px] overflow-hidden">

        {/* BG */}

        <Image
          src="/images/about-hero.png"
          alt="About Pulak Graphics"
          fill
          priority
          className="
            object-cover
            scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        {/* Glow */}

        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="relative z-20 min-h-screen flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

              {/* LEFT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >

                <h1
                  className="
                    text-6xl
                    md:text-8xl
                    lg:text-[58px]
                    font-serif

                    font-black

                    text-white

                    leading-[0.95]

                    tracking-tight
                  "
                >
                  About

                  <br />

                  <span
                    className="
                      bg-gradient-to-r
                      from-blue-400
                      to-cyan-300

                      bg-clip-text
                      text-transparent
                    "
                  >
                    Pulak Graphics
                  </span>

                </h1>

                {/* Description */}

                <p
                  className="
                    mt-10

                    text-xl
                    md:text-2xl
                    font-serif

                    text-white/85

                    max-w-3xl

                    leading-relaxed
                  "
                >
                  We specialize in Print, Publication,
                  Media and Live Event Coverage with
                  creativity, innovation and premium quality.

                </p>

                {/* Buttons */}

                <div className="mt-12 flex flex-wrap gap-5">

                  <a
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
                  </a>

                  <a
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
                  </a>

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
                        Projects Completed
                      </p>

                      <h3 className="text-white text-5xl font-black">
                        500+
                      </h3>
                    </div>

                    <div>
                      <p className="text-white/60">
                        Years Experience
                      </p>

                      <h3 className="text-white text-5xl font-black">
                        20+
                      </h3>
                    </div>

                    <div>
                      <p className="text-white/60">
                        Happy Clients
                      </p>

                      <h3 className="text-white text-5xl font-black">
                        300+
                      </h3>
                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* WHO WE ARE */}

      <section className="py-36 px-6 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-24">

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
              WHO WE ARE
            </div>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-black
                mb-8
                leading-tight
              "
            >
              Creativity That
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                Creates Impact
              </span>

            </h2>

            <p
              className="
                max-w-4xl
                mx-auto

                text-lg

                text-gray-600

                leading-9
              "
            >
              Pulak Graphics transforms ideas into
              premium visual experiences through
              creative thinking, modern production
              and professional execution.
            </p>

          </div>



          {/* CONTENT */}

          <div className="grid lg:grid-cols-2 gap-6">

          {[
          {
          icon:"01",
          title:"Creative Production",

          text:`
          Pulak Graphics is a creative and
          professional print, publication and
          media company dedicated to transforming
          ideas into meaningful visual experiences.

          We work with businesses, brands and
          organizations to create premium visual
          solutions that leave lasting impact.
          `,

          color:"from-blue-600 to-cyan-500",
          },

          {
          icon:"02",
          title:"Professional Execution",

          text:`
          Through creativity, modern production
          methods and attention to detail, we
          deliver projects that communicate
          messages effectively while maintaining
          strong presentation quality.
          `,

          color:"from-emerald-500 to-green-400",
          },

          {
          icon:"03",
          title:"Complete Creative Services",

          text:`
          Our expertise spans across printing,
          publication, photography, videography,
          media production and live event
          coverage with premium execution.
          `,

          color:"from-purple-600 to-pink-500",
          },

          {
          icon:"04",
          title:"Vision & Philosophy",

          text:`
          We believe creative work is more
          than production.

          It is about creating experiences,
          building trust and helping brands
          communicate confidently.
          `,

          color:"from-orange-500 to-red-500",
          },

          ].map((item,index)=>(

          <motion.div
          key={index}

          initial={{
          opacity:0,
          y:40,
          }}

          whileInView={{
          opacity:1,
          y:0,
          }}

          whileHover={{
          y:-6,
          }}

          viewport={{
          once:true,
          }}

          className="
          group

          relative

          rounded-[34px]

          bg-gradient-to-b
          from-white
          to-slate-50

          p-10

          border
          border-slate-100

          shadow-lg

          hover:shadow-[0_25px_70px_rgba(0,0,0,.08)]

          transition-all
          duration-500
          "
          >

          {/* NUMBER */}

          <div
          className={`
          w-20
          h-20

          rounded-[26px]

          bg-gradient-to-r
          ${item.color}

          text-white

          text-3xl
          font-black

          flex
          items-center
          justify-center

          mb-8

          group-hover:rotate-6
          transition
          `}
          >

          {item.icon}

          </div>


          <h3
          className="
          text-[34px]

          font-black

          mb-6

          leading-tight

          text-slate-900
          "
          >

          {item.title}

          </h3>


          <p
          className="
          text-gray-600

          text-[17px]

          leading-[2]

          max-w-[92%]
          "
          >

          {item.text}

          </p>


          {/* small accent */}

          <div
          className={`
          absolute
          top-0
          left-0

          h-2
          w-full

          rounded-t-[34px]

          bg-gradient-to-r
          ${item.color}
          `}
          />

          </motion.div>

          ))}

          </div>


          {/* QUOTE */}

          <div
            className="
              mt-20

              rounded-[40px]

              bg-gradient-to-r
              from-blue-600
              to-cyan-500

              p-16

              text-center

              text-white
            "
          >

            <h3
              className="
                text-4xl
                md:text-5xl

                font-black

                mb-8
              "
            >
              More Than Printing.
              More Than Media.
            </h3>

            <p
              className="
                max-w-5xl
                mx-auto

                text-xl

                leading-10

                text-white/90
              "
            >
              At Pulak Graphics every project begins
              with understanding the vision behind
              the work and ends with delivering
              experiences that inspire, communicate
              and leave a lasting impression.

            </p>

          </div>

        </div>

      </section>

      {/* WHAT WE DO */}

      <section className="py-36 px-6 bg-slate-50 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

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
              WHAT WE DO
            </div>

            <h2
              className="
                text-5xl
                md:text-6xl

                font-black

                mb-8
              "
            >
              Creative Services
              Designed To Deliver
            </h2>

            <p
              className="
                max-w-4xl
                mx-auto

                text-lg

                text-gray-600

                leading-9
              "
            >

              Pulak Graphics offers complete
              creative, publishing and media
              solutions tailored for modern
              businesses, organizations and
              events.

            </p>

          </div>


          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              {
                ...services[0],
                detail:
                  "Professional printing services with premium materials, precision finishing and modern production quality.",
              },

              {
                ...services[1],
                detail:
                  "Complete publication support for books, magazines, promotional publications and branded content.",
              },

              {
                ...services[2],
                detail:
                  "Photography, videography and visual storytelling designed to engage audiences.",
              },

              {
                ...services[3],
                detail:
                  "High-quality event coverage and live production experiences for every occasion.",
              },

            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -12,
                }}
                className="
                  group

                  bg-white

                  rounded-[36px]

                  p-10

                  shadow-xl

                  hover:shadow-2xl

                  transition
                "
              >

                <div
                  className={`
                    text-6xl
                    mb-8

                    ${item.color}

                    group-hover:scale-110

                    transition
                  `}
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    text-3xl

                    font-black

                    mb-6
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-600

                    leading-8
                  "
                >
                  {item.detail}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MISSION + VISION */}

      <section className="py-32 px-6 bg-slate-50">

      <div className="max-w-7xl mx-auto">

      <div className="grid lg:grid-cols-2 gap-10">

      <div
      className="
      rounded-[40px]

      bg-white

      p-14

      shadow-xl
      "
      >

      <h2 className="text-5xl font-black mb-8">
      Our Mission
      </h2>

      <p className="text-lg text-gray-600 leading-9">

      Our mission is to provide
      premium creative, print and
      media solutions that empower
      brands and organizations.

      <br />
      <br />

      We focus on quality,
      innovation and customer
      satisfaction throughout
      every stage of execution.

      </p>

      </div>


      <div
      className="
      rounded-[40px]

      bg-gradient-to-r
      from-blue-600
      to-cyan-600

      text-white

      p-14
      "
      >

      <h2 className="text-5xl font-black mb-8">
      Our Vision
      </h2>

      <p className="text-lg leading-9 text-white/90">

      Our vision is to become a
      recognized creative partner
      known for premium experiences,
      modern production and trust.

      <br />
      <br />

      We aim to inspire businesses
      through innovation and
      exceptional visual storytelling.

      </p>

      </div>

      </div>

      </div>

      </section>

      {/* STATS */}

      <section className="pb-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div
            className="
              rounded-[40px]
              bg-gradient-to-r
              from-blue-600
              to-cyan-600
              p-16
              text-white
              shadow-2xl
            "
          >

            <div className="grid md:grid-cols-4 gap-12">

              {stats.map((item) => (

                <motion.div
                  key={item.label}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="text-center"
                >

                  <h2 className="text-6xl font-black mb-4">
                    {item.number}
                  </h2>

                  <p className="text-xl text-white/80">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </>
  );
}