"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaCamera,
  FaPrint,
  FaVideo,
  FaStar,
  FaPalette,
  FaTruck,
  FaHeadset,
  FaIdCard,
  FaImage,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBookOpen />,
    title: "Book Printing",
    color: "from-blue-600 to-indigo-500",
    text: "Premium quality spiral binding, hard binding and custom book printing.",
  },

  {
    icon: <FaIdCard />,
    title: "Visiting Cards",
    color: "from-purple-600 to-pink-500",
    text: "Premium business cards with stylish layouts and modern branding.",
  },

  {
    icon: <FaImage />,
    title: "Poster Printing",
    color: "from-pink-600 to-rose-500",
    text: "High-quality posters for advertisements and promotions.",
  },

  {
    icon: <FaPrint />,
    title: "Banner Printing",
    color: "from-orange-500 to-red-500",
    text: "Large-format banner printing for events and branding.",
  },

  {
    icon: <FaCamera />,
    title: "Photography",
    color: "from-green-500 to-emerald-500",
    text: "Professional photography for products, weddings and events.",
  },

  {
    icon: <FaVideo />,
    title: "Videography",
    color: "from-red-500 to-pink-500",
    text: "Creative video production for branding and live events.",
  },
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

      {/* SERVICES */}

      <section className="py-28 px-6 font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
              What We Offer
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Premium printing, publication, media and event
              coverage services powered by creativity and technology.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {services.map((service) => (

              <motion.div
                key={service.title}
                whileHover={{
                  y: -12,
                }}
                className="
                  rounded-[34px]
                  bg-white/60
                  backdrop-blur-xl
                  border
                  border-white
                  shadow-xl
                  overflow-hidden
                "
              >

                <div
                  className={`h-2 bg-gradient-to-r ${service.color}`}
                />

                <div className="p-8">

                  <div className="text-4xl text-blue-600 mb-8">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-5">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-8">
                    {service.text}
                  </p>

                  <button
                    className="
                      px-6
                      py-3
                      rounded-full
                      bg-slate-900
                      text-white
                    "
                  >
                    Learn More
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="pb-28 px-6 font-serif">

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