"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaCalendarAlt,
  FaIdCard,
  FaEnvelopeOpenText,
  FaBible,
  FaNewspaper,
  FaFileAlt,
  FaFolderOpen,
} from "react-icons/fa";
import {
  FaPalette,
  FaImage,
  FaAddressCard,
  FaPhotoVideo,
  FaBullhorn,
  FaPaintBrush,
  FaPenNib,
  FaDesktop,
} from "react-icons/fa";
import {
  FaPrint,
  FaLightbulb,
  FaSquareFull,
  FaStar,
  FaLeaf,
  FaLayerGroup,
  FaBuilding,
  FaChalkboard,
} from "react-icons/fa";
import {
  FaFile,
  FaClone,
  FaGem,
  FaFileSignature,
  FaFileInvoice,
  FaFly,
  FaBriefcase,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

const publicationServices = [
  { title: "Books", icon: <FaBookOpen /> },
  { title: "Calendars", icon: <FaCalendarAlt /> },
  { title: "Visiting Cards", icon: <FaIdCard /> },
  { title: "Invitation Cards", icon: <FaEnvelopeOpenText /> },
  { title: "Religious Literature", icon: <FaBible /> },
  { title: "Magazines", icon: <FaNewspaper /> },
  { title: "Brochures", icon: <FaFileAlt /> },
  { title: "Catalogues", icon: <FaFolderOpen /> },
];

const designingServices = [
  { title: "Poster Design", icon: <FaPalette /> },
  { title: "Banner Design", icon: <FaImage /> },
  { title: "Visiting Card Design", icon: <FaAddressCard /> },
  { title: "Photo Design", icon: <FaPhotoVideo /> },
  { title: "Social Media Creatives", icon: <FaBullhorn /> },
  { title: "Advertisement Design", icon: <FaPaintBrush /> },
  { title: "Flex Design", icon: <FaPenNib /> },
  { title: "Event Graphics", icon: <FaDesktop /> },
];

const flexServices = [
  { title: "Frontlit Flex", icon: <FaLightbulb /> },
  { title: "Backlit Flex", icon: <FaLightbulb /> },
  { title: "Blackback Flex", icon: <FaSquareFull /> },
  { title: "Star Flex", icon: <FaStar /> },
  { title: "Eco-Solvent Flex", icon: <FaLeaf /> },
  { title: "Vinyl Printing", icon: <FaPrint /> },
  { title: "Outdoor Hoardings", icon: <FaBuilding /> },
  { title: "Event Backdrops", icon: <FaChalkboard /> },
];

const paperServices = [
  { title: "Uncoated Paper", icon: <FaFile /> },
  { title: "Coated Paper", icon: <FaClone /> },
  { title: "Cardstock", icon: <FaLayerGroup /> },
  { title: "Specialty Paper", icon: <FaGem /> },
  { title: "Letterheads", icon: <FaFileSignature /> },
  { title: "Pamphlets", icon: <FaFileInvoice /> },
  { title: "Flyers", icon: <FaFly /> },
  { title: "Business Stationery", icon: <FaBriefcase /> },
];

const features = [
  {
    icon: <FaStar />,
    title: "Premium Quality",
    text: "Top-quality materials and modern technology.",
  },

  {
    icon: <FaPalette />,
    title: "Creative Team",
    text: "Innovative designers and media professionals.",
  },

  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    text: "Timely delivery for every project and event.",
  },

  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    text: "Dedicated support whenever you need help.",
  },
];

export default function Services() {
  return (
    <>

      {/* HERO */}
      <section className="relative min-h-screen -mt-[5px] overflow-hidden">
        {/* BG */}
        <Image
          src="/images/service_hero.png"
          alt="Pulak Graphics Services"
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

                {/* Heading */}

                <h1
                  className="
                    text-6xl
                    md:text-8xl
                    lg:text-[58px]

                    font-black
                    font-serif
                    text-white

                    leading-[0.95]
                  "
                >
                  Our

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
                    Services
                  </span>

                </h1>

                {/* Text */}

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
                  Print • Publication • Media • Live Coverage

                  <br />

                  Creative solutions designed to help
                  brands, businesses and events stand out.

                </p>

                {/* Buttons */}

                <div className="mt-12 flex flex-wrap gap-5">

                  <Link
                    href="/contact"
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
                    Get Quote →
                  </Link>

                  <Link
                    href="/about"
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
                    Learn More
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
                        Services Available
                      </p>

                      <h3 className="text-white text-5xl font-black">
                        6+
                      </h3>
                    </div>

                    <div>
                      <p className="text-white/60">
                        Creative Categories
                      </p>

                      <h3 className="text-white text-5xl font-black">
                        4+
                      </h3>
                    </div>

                    <div>
                      <p className="text-white/60">
                        Support Available
                      </p>

                      <h3 className="text-white text-5xl font-black">
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

      {/* PUBLICATION SERVICES */}

      <section className="py-28 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
              Publication Services
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">
              Pulak Graphics provides complete publication
              solutions including books, calendars, visiting cards,
              magazines, invitation cards and promotional materials.
              We ensure premium design, professional layouts and
              high-quality printing for every publication project.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {publicationServices.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-xl
                  border
                  border-slate-100
                "
              >

                <div className="text-4xl text-blue-600 mb-6">
                    {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  Premium publication solutions with
                  professional layouts and quality printing.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* DESIGNING SERVICES */}

      <section className="py-28 px-6 bg-slate-50 font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
              Designing Services
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">
              Our creative designing team develops impactful visual
              content for businesses, religious organizations and
              events. Every design is created with creativity,
              branding consistency and professional presentation.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {designingServices.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-xl
                  border
                  border-slate-100
                "
              >

                <div className="text-4xl text-purple-600 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  Creative and professional designs
                  tailored for branding, promotion
                  and visual communication.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FLEX PRINTING SERVICES */}

      <section className="py-28 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
              Flex Printing Services
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">
              We provide premium flex printing solutions for
              advertising, exhibitions, religious programs,
              events and outdoor branding with vibrant colors
              and durable print quality.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {flexServices.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-xl
                  border
                  border-slate-100
                "
              >

                <div className="text-4xl text-green-600 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  Durable, vibrant and professional
                  flex printing solutions for every need.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PAPER PRINTING SERVICES */}

      <section className="py-28 px-6 bg-slate-50 font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
              Paper Printing Services
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">
              From business stationery to marketing materials,
              we provide premium paper printing services using
              high-quality paper stocks and modern printing
              technology.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {paperServices.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-xl
                  border
                  border-slate-100
                "
              >

                <div className="text-4xl text-orange-600 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  High-quality paper printing with
                  sharp colors and premium finishing.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-32 pb-32 px-6 font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black">
              Why Choose Us
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {features.map((feature) => (

              <motion.div
                key={feature.title}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[32px]
                  bg-gradient-to-b
                  from-white
                  to-slate-50
                  p-8
                  shadow-xl
                  text-center
                "
              >

                <div className="text-4xl text-blue-600 mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}