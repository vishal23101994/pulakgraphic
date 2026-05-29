"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaPrint,
  FaCamera,
  FaBroadcastTower,
  FaBookOpen,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBookOpen />,
    title: "Publication",
    color: "text-purple-600",
    detail:
      "Books, magazines, diaries, calendars, invitation cards, religious publications and all types of publication services with professional layouts and premium quality.",
  },

  {
    icon: <FaCamera />,
    title: "Designing",
    color: "text-blue-600",
    detail:
      "Poster design, social media creatives, banners, flex designs, advertisement creatives, event graphics, branding materials and custom visual content.",
  },

  {
    icon: <FaPrint />,
    title: "Flex Printing",
    color: "text-green-600",
    detail:
      "High-quality flex printing for events, promotions, shops, exhibitions, religious programs, hoardings, backdrops and outdoor branding requirements.",
  },

  {
    icon: <FaPrint />,
    title: "Paper Printing",
    color: "text-orange-600",
    detail:
      "Visiting cards, brochures, pamphlets, letterheads, wedding cards, invitation cards, posters, catalogues and all types of paper printing solutions.",
  },
]

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

      <section className="relative min-h-screen -mt-[5px] overflow-hidden">

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
      {/* ABOUT PULAK GRAPHICS */}

      <section className="py-32 px-6 bg-[#f8fbff] overflow-hidden font-serif">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}

          <div className="text-center mb-20">

            <div
              className="
                inline-flex
                items-center
                gap-2

                px-5
                py-2

                rounded-full

                bg-blue-100

                text-blue-700

                font-semibold

                mb-6
              "
            >
              About Pulak Graphics
            </div>

            <h2
              className="
                text-5xl
                md:text-6xl

                font-black

                leading-tight

                text-slate-900

                mb-6
              "
            >
              The Story Behind

              <span
                className="
                  ml-4

                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500

                  bg-clip-text
                  text-transparent
                "
              >
                Pulak Graphics
              </span>

            </h2>

            <p
              className="
                max-w-3xl
                mx-auto

                text-lg

                text-gray-600

                leading-9
              "
            >
              A creative journey built on innovation,
              spirituality, professional printing and
              meaningful visual storytelling.
            </p>

          </div>

          {/* MAIN BOX */}

          <div
            className="
              relative

              rounded-[42px]

              bg-white

              border
              border-slate-100

              shadow-[0_40px_120px_rgba(0,0,0,.08)]

              overflow-hidden
            "
          >

            {/* TOP LIGHT */}

            <div
              className="
                absolute
                top-0
                left-0
                right-0

                h-[180px]

                bg-gradient-to-b
                from-blue-50
                to-transparent
              "
            />

            <div
              className="
                relative
                z-10

                p-8
                md:p-14
              "
            >

              {/* BOOK STYLE LAYOUT */}

              <div className="relative">

                {/* IMAGE SIDE */}

                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="
                    lg:w-[38%]
                    relative
                    mb-10
                    lg:float-left
                    lg:mr-14
                  "
                >

                  <div className="sticky top-28">

                    {/* IMAGE */}

                    <div
                      className="
                        relative

                        overflow-hidden

                        rounded-[36px]

                        shadow-[0_30px_80px_rgba(0,0,0,.12)]

                        border
                        border-white
                      "
                    >

                      <Image
                        src="/images/about1.jpeg"
                        alt="Pulak Graphics"
                        width={700}
                        height={950}
                        className="
                          w-full
                          h-full

                          object-cover

                          hover:scale-105

                          transition-all
                          duration-700
                        "
                      />

                      {/* DARK OVERLAY */}

                      <div
                        className="
                          absolute
                          inset-0

                          bg-gradient-to-t
                          from-black/45
                          via-black/10
                          to-transparent
                        "
                      />

                    </div>

                    {/* FLOAT CARD */}

                    <div
                      className="
                        relative

                        -mt-12
                        mx-6

                        bg-white

                        rounded-[30px]

                        p-7

                        shadow-[0_20px_60px_rgba(0,0,0,.12)]

                        border
                        border-slate-100
                      "
                    >

                      <div
                        className="
                          text-blue-600
                          text-sm
                          font-semibold
                          mb-2
                        "
                      >
                        Creative Excellence
                      </div>

                      <h4
                        className="
                          text-3xl

                          font-black

                          text-slate-900

                          mb-3
                        "
                      >
                        Premium Printing
                      </h4>

                      <p className="text-gray-600 leading-7">

                        Professional printing,
                        branding, publications
                        and spiritual media
                        solutions with modern
                        creative standards.

                      </p>

                    </div>

                  </div>

                </motion.div>

                {/* TEXT SIDE */}

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="
                    
                    text-gray-700

                    text-[18px]

                    leading-[2.15]
                  "
                >

                  <p className="mb-8">

                    In 2004, Shri Ankit Jain “Prince”
                    established
                    <span className="font-semibold text-slate-900">
                      {" "}Pulak Graphics{" "}
                    </span>
                    with a vision to build a professional
                    creative and printing platform dedicated
                    to premium-quality publication,
                    branding and visual communication services.

                  </p>

                  <p className="mb-8">

                    Through this initiative, he officially
                    entered the professional printing industry
                    and gradually transformed Pulak Graphics
                    into a trusted name in printing,
                    publication and religious media production.

                    <br />
                    <br />

                    The organization became recognized for
                    delivering premium printing quality,
                    elegant designs, publication layouts,
                    branding materials and spiritual literature
                    with professionalism and creativity.

                  </p>

                  {/* HIGHLIGHT BOX */}

                  <div
                    className="
                      w-full
                      lg:w-[58%]

                      ml-auto

                      bg-gradient-to-r
                      from-blue-700
                      to-cyan-500

                      rounded-[40px]

                      px-14
                      py-12

                      text-white

                      shadow-[0_25px_70px_rgba(37,99,235,.28)]

                      mb-12
                    "
                  >

                    <h3
                      className="
                        text-3xl

                        font-black

                        mb-5
                      "
                    >
                      Spiritual Inspiration & Guidance
                    </h3>

                    <p className="leading-[2] text-white/90">

                      During this journey, Shri Ankit Jain
                      received the special blessings and
                      guidance of
                      <span className="font-semibold">
                        {" "}Pujya Pulak Sagar Ji Maharaj{" "}
                      </span>
                      whose inspiration played a major role
                      in shaping the purpose and direction
                      of Pulak Graphics.

                    </p>

                  </div>

                  <p className="mb-8">

                    He not only worked on printing and
                    publication projects related to
                    Pujya Pulak Sagar Ji Maharaj,
                    but also contributed towards creating
                    spiritual books, invitation cards,
                    magazines, religious literature,
                    promotional material and publication
                    work for several Jain saints and
                    spiritual organizations.

                  </p>

                  <p className="mb-8">

                    Pulak Graphics gradually evolved into
                    much more than a printing company.
                    It became a creative platform dedicated
                    to spreading spirituality, awareness
                    and positive messages through modern
                    design, meaningful storytelling and
                    professional visual presentation.

                  </p>

                  {/* QUOTE */}

                  <div
                    className="
                      mt-12

                      rounded-[34px]

                      border-l-[6px]
                      border-cyan-500

                      bg-cyan-50

                      p-9
                    "
                  >

                    <p
                      className="
                        text-2xl

                        leading-[1.9]

                        font-semibold

                        text-slate-800
                      "
                    >
                      Today, Pulak Graphics continues
                      to represent creativity, trust,
                      professionalism and impactful
                      visual communication while serving
                      spiritual, social and commercial
                      projects with premium quality
                      and modern creative standards.
                    </p>

                  </div>

                </motion.div>

              </div>

            </div>

          </div>

        </div>
        <div className="clear-both" />

      </section>

      {/* WHO WE ARE */}

      <section className="py-36 px-6 bg-white font-serif overflow-hidden">

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
                text-3xl
                md:text-5xl
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

          text-2xl
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
          text-[28px]

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

          text-[13px]

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
                text-2xl
                md:text-3xl

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

      <section className="py-36 px-6 bg-slate-50 font-serif overflow-hidden">

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
                text-3xl
                md:text-4xl

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
                    text-4xl
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
                    text-2xl

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
                <Link
                  href="/services"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    mt-8

                    text-blue-600
                    font-semibold

                    hover:gap-3

                    transition-all
                  "
                >
                  Read More →
                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MISSION + VISION */}

      <section className="py-20 px-2 bg-slate-50 font-serif">

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

        <h2 className="text-3xl font-black mb-4">
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

        <h2 className="text-3xl font-black mb-8">
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

      <section className="pb-28 px-6 font-serif">

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

                  <h2 className="text-3xl font-black mb-4">
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