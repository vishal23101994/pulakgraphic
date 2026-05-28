"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaHeadset,
  FaGlobe,
} from "react-icons/fa";

import {
  TramFront,
  Train,
  Bus,
} from "lucide-react";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 9810900699 | 6391915673",
    desc: "Available for support & inquiries",
    color: "from-blue-500 to-cyan-500",
  },

  {
    icon: <FaEnvelope />,
    title: "Email Address",
    value: "jinsharnam@gmail.com",
    desc: "Send your project requirements",
    color: "from-purple-500 to-pink-500",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    value: "P-75, Street No-5, Bihari Colony Extension, Shahdara, Delhi-110032, India",
    desc: "Creative studio & production hub",
    color: "from-orange-500 to-red-500",
  },
];

const highlights = [
  {
    icon: <FaClock />,
    title: "Fast Response",
    text: "Quick communication for every project inquiry.",
  },

  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    text: "Dedicated assistance whenever needed.",
  },

  {
    icon: <FaGlobe />,
    title: "Creative Solutions",
    text: "Modern printing, media & publication services.",
  },
];

export default function Contact() {
  return (
    <>
      {/* HERO */}

      <section className="relative bg-[#07111f] -mt-[5px] pt-[180px] pb-24 px-6 overflow-hidden font-serif">

        {/* LIGHTS */}

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADER */}

          <div className="text-center max-w-3xl mx-auto mb-12">

            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/20
                text-blue-300
                text-sm
                font-medium
                mb-6
              "
            >
              CONTACT US
            </div>

            <h1
              className="
                text-3xl
                md:text-4xl
                font-black
                text-white
                leading-tight
                mb-6
              "
            >
              Let’s Build
              Something Creative
            </h1>

            <p
              className="
                text-sm
                md:text-lg
                text-slate-300
                leading-8
              "
            >
              Contact Pulak Graphics for premium
              printing, publication, branding,
              media production and live event
              coverage solutions.
            </p>

          </div>

          {/* MAIN GRID */}

          <div className="grid lg:grid-cols-[460px_560px] justify-center gap-8 items-start">

            {/* LEFT CONTACT */}

            <div className="space-y-4">

              {contactInfo.map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -4 }}
                  className="
                    bg-[#0d1728]
                    border
                    border-white/5
                    rounded-[22px]
                    p-4
                  "
                >

                  <div
                    className={`
                      w-12
                      h-12
                      rounded-xl
                      bg-gradient-to-r
                      ${item.color}
                      flex
                      items-center
                      justify-center
                      text-white
                      text-lg
                      mb-4
                    `}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.title}
                  </h3>

                  <p className="text-slate-200 text-sm mb-1">
                    {item.value}
                  </p>

                  <p className="text-slate-500 text-xs">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

            {/* FORM */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                bg-white
                rounded-[32px]
                p-4
                md:p-8
                max-w-[560px]
                shadow-[0_30px_80px_rgba(0,0,0,.15)]
              "
            >

              <div className="mb-8">

                <h2 className="text-2xl font-black mb-3">
                  Send Message
                </h2>

                <p className="text-gray-600 text-sm leading-7">
                  Share your project details and our team
                  will connect with you shortly.
                </p>

              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">

                <input
                  placeholder="Full Name"
                  className="
                    h-[54px]
                    rounded-xl
                    px-5
                    bg-slate-50
                    border
                    border-slate-200
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                />

                <input
                  placeholder="Email Address"
                  className="
                    h-[54px]
                    rounded-xl
                    px-5
                    bg-slate-50
                    border
                    border-slate-200
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">

                <input
                  placeholder="Phone Number"
                  className="
                    h-[54px]
                    rounded-xl
                    px-5
                    bg-slate-50
                    border
                    border-slate-200
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                />

                <input
                  placeholder="Service Required"
                  className="
                    h-[54px]
                    rounded-xl
                    px-5
                    bg-slate-50
                    border
                    border-slate-200
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                />

              </div>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="
                  w-full
                  rounded-xl
                  p-5
                  bg-slate-50
                  border
                  border-slate-200
                  text-sm
                  resize-none
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-200
                "
              />

              <button
                className="
                  mt-6
                  h-[56px]
                  px-8
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  text-sm
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:scale-[1.02]
                  transition
                "
              >
                Send Message
                <FaPaperPlane />
              </button>

            </motion.div>

          </div>

        </div>

      </section>  

      {/* MAP SECTION */}

      <section className="py-24 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="text-center max-w-3xl mx-auto mb-16">

            <div
              className="
                inline-flex
                items-center

                px-5
                py-2

                rounded-full

                bg-blue-100

                text-blue-700
                text-sm
                font-semibold

                mb-6
              "
            >
              FIND OUR OFFICE
            </div>

            <h2
              className="
                text-3xl
                md:text-4xl

                font-black

                text-slate-900

                mb-6
              "
            >
              Visit Pulak Graphics
            </h2>

            <p
              className="
                text-gray-600
                text-lg
                leading-8
              "
            >
              Visit our creative studio and production office
              for printing, publication, branding, media and
              live event coverage solutions.
            </p>

          </div>

          {/* MAP CARD */}

          <div
            className="
              grid
              lg:grid-cols-[320px_1fr]

              gap-8

              items-stretch
            "
          >

            {/* LEFT INFO */}

            <div
              className="
                bg-[#07111f]

                rounded-[32px]

                p-8

                text-white

                flex
                flex-col
                justify-between
              "
            >

              <div>

                <h3
                  className="
                    text-3xl
                    font-black
                    mb-6
                  "
                >
                  Our Office
                </h3>

                <p
                  className="
                    text-slate-300
                    leading-8
                    mb-8
                  "
                >
                  Pulak Graphics <br />

                  Vatsalya Bhawan,
                  P-75, Street No. 5,
                  Bihari Colony Extension,
                  Shahdara, Delhi – 110032
                </p>

              </div>

              <div
                className="
                  border-t
                  border-white/10

                  pt-6
                "
              >

                <p className="text-slate-400 text-sm mb-2">
                  Working Hours
                </p>

                <p className="text-white">
                  Mon - Sat : 10:00 AM - 7:00 PM
                </p>

              </div>

            </div>

            {/* MAP */}

            <div
              className="
                rounded-[32px]

                overflow-hidden

                shadow-[0_30px_100px_rgba(0,0,0,.12)]

                border
                border-slate-200
              "
            >

              <iframe
                src="https://www.google.com/maps?q=Pulak+Graphics+Delhi&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[500px] w-full"
              />

            </div>

          </div>

        </div>

      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-white font-serif"
      >

        <div
          className="
            max-w-7xl
            mx-auto

            rounded-[40px]

            overflow-hidden

            bg-gradient-to-br
            from-[#071120]
            via-[#0b1629]
            to-[#10203a]

            border
            border-blue-500/10

            shadow-[0_30px_120px_rgba(0,0,0,.25)]

            p-8
            md:p-14
          "
        >

          {/* HEADING */}

          <div className="text-center mb-16">

            <div
              className="
                inline-flex

                px-5
                py-2

                rounded-full

                bg-blue-500/10

                border
                border-blue-400/20

                text-blue-300

                text-sm

                mb-6
              "
            >
              Office Connectivity
            </div>

            <h2
              className="
                text-3xl
                md:text-4xl

                font-black

                text-white

                mb-6
              "
            >
              How To Reach
              <span className="text-cyan-400 ml-3">
                Our Office
              </span>
            </h2>

            <p
              className="
                text-white/70

                max-w-3xl
                mx-auto

                leading-8
              "
            >
              Our office is conveniently connected through
              metro stations, railway connectivity and
              nearby public transport facilities for easy access.
            </p>

          </div>

          {/* CARDS */}

          <div className="grid md:grid-cols-3 gap-8">

            {/* METRO */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
                rounded-[32px]

                bg-white/[0.04]

                border
                border-white/10

                p-8

                backdrop-blur-sm

                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600

                  flex
                  items-center
                  justify-center

                  text-white

                  mb-8
                "
              >
                <TramFront size={28} />
              </div>

              <h3 className="text-2xl font-black text-white mb-6">
                Metro Stations
              </h3>

              <div className="space-y-6 text-white/75">

                <div>
                  <p className="font-semibold text-white">
                    Shahdara Metro Station
                  </p>

                  <p className="text-sm leading-7">
                    Red Line • ~1.2 km
                    <br />
                    Auto & E-rickshaw available
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Welcome Metro Station
                  </p>

                  <p className="text-sm leading-7">
                    Red / Pink Line Interchange
                    <br />
                    ~2.3 km distance
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    East Azad Nagar
                  </p>

                  <p className="text-sm leading-7">
                    Pink Line • ~2 km
                    <br />
                    Easy connectivity from East Delhi
                  </p>
                </div>

              </div>

            </motion.div>

            {/* RAILWAY */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
                rounded-[32px]

                bg-white/[0.04]

                border
                border-white/10

                p-8

                backdrop-blur-sm

                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500

                  flex
                  items-center
                  justify-center

                  text-white

                  mb-8
                "
              >
                <Train size={28} />
              </div>

              <h3 className="text-2xl font-black text-white mb-6">
                Railway Station
              </h3>

              <p className="text-white font-semibold mb-3">
                Shahdara Junction (SDA)
              </p>

              <p className="text-white/70 leading-8">
                Approximately 1.5 km away from
                our office location with easy
                availability of auto-rickshaw
                and cab services.
              </p>

            </motion.div>

            {/* BUS */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
                rounded-[32px]

                bg-white/[0.04]

                border
                border-white/10

                p-8

                backdrop-blur-sm

                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600

                  flex
                  items-center
                  justify-center

                  text-white

                  mb-8
                "
              >
                <Bus size={28} />
              </div>

              <h3 className="text-2xl font-black text-white mb-6">
                Nearby Bus Stop
              </h3>

              <p className="text-white font-semibold mb-3">
                Bihari Colony Bus Stop
              </p>

              <p className="text-white/70 leading-8">
                Walking distance from office
                location with frequent local
                bus connectivity throughout Delhi.
              </p>

            </motion.div>

          </div>

        </div>

      </motion.section>

      {/* HIGHLIGHTS */}

      <section className="py-20 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            {highlights.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -10,
                }}
                className="
                  rounded-[28px]

                  bg-slate-50

                  p-7

                  shadow-lg

                  text-center
                "
              >

                <div
                  className="
                    w-14
                    h-14

                    rounded-full

                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500

                    text-white
                    text-xl

                    flex
                    items-center
                    justify-center

                    mx-auto
                    mb-8
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-black mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}