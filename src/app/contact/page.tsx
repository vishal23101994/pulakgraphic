"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
  },

  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "info@pulakgraphics.com",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Office",
    value: "Delhi, India",
  },
];

export default function Contact() {
  return (
    <>

      {/* HERO */}

      <section className="relative min-h-screen -mt-[110px] pt-[160px] overflow-hidden">

        <Image
          src="/contact-bg.png"
          alt="Contact Pulak Graphics"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        {/* Glow */}

        <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[180px]" />

        <div className="relative z-20 max-w-7xl mx-auto px-6">

          {/* HEADER */}

          <div className="text-center mb-24">

            <motion.h1
              initial={{
                opacity: 0,
                y: -60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                text-6xl
                md:text-8xl
                lg:text-[100px]
                font-black
                text-white
                mb-8
                leading-none
              "
            >
              Let’s Create
              <br />
              Something Amazing
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                text-xl
                md:text-3xl
                text-white/90
                max-w-4xl
                mx-auto
              "
            >
              Contact Pulak Graphics for
              printing, publication,
              media and live coverage services.
            </motion.p>

          </div>

          {/* CONTACT AREA */}

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10">

            {/* LEFT */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/20
                rounded-[40px]
                p-10
                shadow-2xl
              "
            >

              <h2 className="text-4xl font-black text-white mb-12">
                Contact Information
              </h2>

              <div className="space-y-8">

                {contactInfo.map((item) => (

                  <motion.div
                    key={item.title}
                    whileHover={{
                      x: 10,
                    }}
                    className="
                      flex
                      gap-5
                      items-center
                    "
                  >

                    <div
                      className="
                        w-20
                        h-20
                        rounded-[24px]
                        bg-white/10
                        border
                        border-white/20
                        flex
                        items-center
                        justify-center
                        text-white
                        text-2xl
                      "
                    >
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="text-white font-bold text-xl">
                        {item.title}
                      </h3>

                      <p className="text-gray-300">
                        {item.value}
                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </motion.div>

            {/* FORM */}

            <motion.form
              whileHover={{
                y: -5,
              }}
              className="
                rounded-[40px]
                bg-white/80
                backdrop-blur-2xl
                p-10
                shadow-[0_30px_80px_rgba(0,0,0,0.15)]
              "
            >

              <h2 className="text-4xl font-black mb-10">
                Send Message
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <input
                  placeholder="Full Name"
                  className="
                    w-full
                    h-[70px]
                    rounded-2xl
                    px-6
                    bg-white
                    border
                    border-slate-200
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-200
                  "
                />

                <input
                  placeholder="Email Address"
                  className="
                    w-full
                    h-[70px]
                    rounded-2xl
                    px-6
                    bg-white
                    border
                    border-slate-200
                    focus:ring-4
                    focus:ring-blue-200
                  "
                />

              </div>

              <input
                placeholder="Phone Number"
                className="
                  w-full
                  h-[70px]
                  rounded-2xl
                  px-6
                  mb-6
                  bg-white
                  border
                  border-slate-200
                "
              />

              <textarea
                rows={7}
                placeholder="Tell us about your project..."
                className="
                  w-full
                  rounded-2xl
                  p-6
                  bg-white
                  border
                  border-slate-200
                  resize-none
                "
              />

              <button
                className="
                  mt-8
                  w-full
                  h-[72px]

                  rounded-2xl

                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500

                  text-white
                  font-bold
                  text-lg

                  flex
                  justify-center
                  items-center
                  gap-4

                  hover:scale-[1.02]
                  transition
                "
              >
                Send Message

                <FaPaperPlane />
              </button>

            </motion.form>

          </div>

        </div>

      </section>

    </>
  );
}