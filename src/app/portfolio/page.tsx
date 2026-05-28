"use client";

import { motion } from "framer-motion";

import {
  FaAward,
  FaBookOpen,
  FaBullhorn,
  FaGlobe,
  FaHandshake,
  FaHeart,
  FaMedal,
  FaNewspaper,
  FaPhotoVideo,
  FaPrint,
  FaUsers,
  FaUserFriends,
  FaUniversity,
  FaPrayingHands,
  FaStar,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const journey = [
  {
    year: "1995",
    title: "Spiritual Beginning",
    desc:
      "Met पूज्य उपाध्याय ज्ञान सागर जी महाराज which became a turning point in his spiritual and social journey.",
    icon: <FaHeart />,
  },

  {
    year: "1996",
    title: "Gyansagar Fabrics",
    desc:
      "Started entrepreneurial journey with surplus fabrics business through dedication and self-belief.",
    icon: <FaHandshake />,
  },

  {
    year: "1997",
    title: "Paras Garments",
    desc:
      "Established ready-made T-shirt manufacturing unit and entered garment industry.",
    icon: <FaPrint />,
  },

  {
    year: "1998",
    title: "Pulak Jan Chetna Manch",
    desc:
      "Founded a youth-based religious and social organization that later connected 1000+ members.",
    icon: <FaUsers />,
  },

  {
    year: "2004",
    title: "Pulak Graphics",
    desc:
      "Started professional printing and publication company serving religious and social institutions.",
    icon: <FaPhotoVideo />,
  },

  {
    year: "2015",
    title: "British Parliament Visit",
    desc:
      "Visited London with पूज्य पुलक सागर जी महाराज during Bharat Gaurav Samman ceremony.",
    icon: <FaAward />,
  },

  {
    year: "2018",
    title: "Jinsharnam Media",
    desc:
      "Expanded spiritual and religious awareness globally through digital media platforms.",
    icon: <FaGlobe />,
  },
];

const achievements = [
  {
    title: "Pulak Vani Magazine",
    desc:
      "Successfully edited and managed Pulak Vani monthly magazine from 1998 to 2021 while spreading social and spiritual awareness.",
    icon: <FaBookOpen />,
  },

  {
    title: "Digital Media Expansion",
    desc:
      "Used YouTube, Facebook, Instagram and other platforms to spread Jain teachings and connect global audiences.",
    icon: <FaBullhorn />,
  },

  {
    title: "Religious Promotion",
    desc:
      "Played a major role in spreading messages and teachings of revered Jain saints across India.",
    icon: <FaPrayingHands />,
  },

  {
    title: "Social Recognition",
    desc:
      "Received prestigious titles including युवा रत्न, पुलक रत्न and समाज रत्न for social contribution.",
    icon: <FaMedal />,
  },
];

const qualities = [
  "Leadership & Team Building",
  "Social Service & Dedication",
  "Modern Digital Vision",
  "Religious Awareness",
  "Creative Thinking",
  "Strong Organizational Skills",
];

export default function Portfolio() {
  return (
    <>
      {/* HERO */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#071120]
          min-h-screen
          flex
          items-center
          pt-[140px]
          pb-24
          font-serif
        "
      >

        {/* VIDEO BG */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0

            w-full
            h-full

            object-cover

            opacity-[60]

            scale-110
          "
        >
          <source
            src="/videos/video.mp4"
            type="video/mp4"
          />
        </video>


        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            w-full
          "
        >
          <div
            className="
              grid
              lg:grid-cols-2
              gap-14
              items-center
            "
          >
            {/* LEFT */}

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  px-5
                  py-2

                  rounded-full

                  border
                  border-cyan-400/20

                  bg-cyan-400/10

                  text-cyan-300
                  text-sm

                  mb-8
                "
              >
                Inspiring Spiritual & Social Journey
              </div>

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-[58px]

                  leading-[0.95]

                  font-black

                  text-white

                  mb-8
                "
              >
                Shri Ankit Jain

                <span
                  className="
                    block

                    mt-3

                    bg-gradient-to-r
                    from-cyan-300
                    to-blue-500

                    bg-clip-text
                    text-transparent
                  "
                >
                  “Prince”
                </span>
              </h1>

              <p
                className="
                  text-lg
                  md:text-xl

                  leading-9

                  text-white/75

                  max-w-2xl

                  mb-12
                "
              >
                A visionary entrepreneur, spiritual personality
                and social contributor connecting youth,
                spirituality and society through digital media,
                publications and religious awareness.
              </p>

              {/* STATS */}

              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-8

                  pt-10

                  border-t
                  border-white/10
                "
              >
                {[
                  {
                    number: "25+",
                    label: "Years Journey",
                  },

                  {
                    number: "1000+",
                    label: "People Connected",
                  },

                  {
                    number: "50+",
                    label: "Religious Events",
                  },

                  {
                    number: "Global",
                    label: "Digital Reach",
                  },
                ].map((item, index) => (

                  <div key={index}>

                    <h3
                      className="
                        text-3xl
                        font-black
                        text-cyan-300
                        mb-2
                      "
                    >
                      {item.number}
                    </h3>

                    <p className="text-white/65 leading-7">
                      {item.label}
                    </p>

                  </div>

                ))}
              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
                relative

                flex
                justify-center
                lg:justify-end
              "
            >

              {/* IMAGE GLOW */}

              <div
                className="
                  absolute
                  w-[120px]
                  h-[120px]

                  bg-cyan-400/20

                  blur-[120px]

                  rounded-full
                "
              />

              {/* PERSON IMAGE */}

              <div
                className="
                  relative        
                "
              >

                <img
                  src="/images/ankitjain1.png"
                  alt="Shri Ankit Jain"
                  className="
                    w-full
                    max-w-[350px]
                    object-cover
                  "
                />

                {/* FLOATING CARD */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2

                    w-[78%]

                    rounded-[18px]

                    bg-black/40

                    border
                    border-white/10

                    backdrop-blur-xl

                    px-6
                    py-5

                    text-center
                  "
                >
                  <p
                    className="
                      text-white/70
                      mt-2
                      text-[15px]
                    "
                  >
                    Entrepreneurship • Spirituality • Social Service
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="py-28 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>

              <div className="text-blue-600 font-bold mb-5">
                ABOUT THE JOURNEY
              </div>

              <h2
                className="
                  text-3xl
                  md:text-5xl

                  font-black

                  leading-tight

                  mb-10
                "
              >
                Inspiration,
                Struggle &
                Social Impact
              </h2>

              <div className="space-y-8 text-gray-600 leading-9 text-lg">

                <p>
                  Shri Ankit Jain “Prince” is a respected
                  spiritual, social and creative personality
                  whose life journey reflects dedication,
                  struggle, vision and continuous growth.
                  His inspiring journey from a young
                  entrepreneur to a recognized contributor
                  in religion, media and social awareness
                  continues to motivate thousands of people.
                </p>

                <p>
                  Guided by the blessings of revered Jain
                  saints including पूज्य पुलक सागर जी महाराज,
                  he devoted himself to social awareness,
                  youth engagement, religious promotion and
                  creative communication through modern
                  platforms.
                </p>

                <p>
                  Through Pulak Graphics and Jinsharnam
                  Media, he successfully connected
                  spirituality with technology and created
                  meaningful platforms for publications,
                  digital outreach, social campaigns and
                  religious awareness programs.
                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="grid gap-6">

              <div
                className="
                  rounded-[32px]

                  bg-slate-50

                  p-10

                  border
                  border-slate-100

                  shadow-lg
                "
              >

                <FaUniversity className="text-5xl text-blue-600 mb-6" />

                <h3 className="text-3xl font-black mb-6">
                  Family & Cultural Values
                </h3>

                <p className="text-gray-600 leading-8 text-lg">
                  Born into a spiritually connected Jain
                  family, Shri Ankit Jain received strong
                  cultural values, discipline and religious
                  guidance from his family environment.
                  These values later became the foundation
                  of his social and spiritual journey.
                </p>

              </div>

              <div
                className="
                  rounded-[32px]

                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500

                  p-10

                  text-white

                  shadow-2xl
                "
              >

                <FaStar className="text-5xl mb-6" />

                <h3 className="text-3xl font-black mb-6">
                  Vision & Mission
                </h3>

                <p className="leading-8 text-white/90 text-lg">
                  His mission has always been to connect
                  youth, society and spirituality through
                  modern communication, publications,
                  creative branding and digital media while
                  spreading positivity and Jain values.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* JOURNEY */}

      <section className="py-28 px-6 bg-slate-50 font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
              Journey Timeline
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Important milestones that shaped the
              inspiring life journey of Shri Ankit Jain
              “Prince”.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {journey.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[32px]

                  bg-white

                  p-8

                  shadow-lg

                  border
                  border-slate-100
                "
              >

                <div
                  className="
                    w-16
                    h-16

                    rounded-2xl

                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500

                    flex
                    items-center
                    justify-center

                    text-white
                    text-2xl

                    mb-6
                  "
                >
                  {item.icon}
                </div>

                <div className="text-blue-600 font-bold mb-3">
                  {item.year}
                </div>

                <h3 className="text-2xl font-black mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="py-28 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
              Achievements &
              Contributions
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Contributions towards religion, media,
              publication, youth empowerment and social
              awareness initiatives.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {achievements.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[32px]

                  bg-slate-50

                  p-10

                  border
                  border-slate-100

                  shadow-lg
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

                    text-white
                    text-2xl

                    flex
                    items-center
                    justify-center

                    mb-6
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-lg">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* DIGITAL MEDIA */}

      <section className="py-28 px-6 bg-[#071120] font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <div className="text-cyan-400 font-bold mb-5">
              DIGITAL PRESENCE
            </div>

            <h2 className="text-5xl font-black text-white mb-8">
              Modern Media &
              Global Outreach
            </h2>

            <p className="text-white/70 text-lg max-w-4xl mx-auto leading-9">
              Through Jinsharnam Media, Shri Ankit Jain
              successfully used modern digital platforms
              to spread spiritual teachings and connect
              audiences globally.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <FaYoutube />,
                title: "YouTube",
                text: "Spiritual discourses, religious events and motivational content reached thousands of viewers.",
              },

              {
                icon: <FaFacebook />,
                title: "Facebook",
                text: "Created social awareness and connected Jain communities digitally.",
              },

              {
                icon: <FaInstagram />,
                title: "Instagram",
                text: "Modern creative content helped youth connect with spirituality and culture.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="
                  rounded-[32px]

                  bg-white/5

                  border
                  border-white/10

                  p-10

                  backdrop-blur-xl
                "
              >

                <div className="text-5xl text-cyan-400 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-black text-white mb-5">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-8">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* QUALITIES */}

      <section className="py-28 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6">
              Personality &
              Leadership Qualities
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Inspiring qualities that define the
              personality and leadership journey of
              Shri Ankit Jain “Prince”.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {qualities.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[28px]

                  bg-slate-50

                  p-8

                  text-center

                  shadow-lg
                "
              >

                <FaUserFriends className="text-4xl text-blue-600 mx-auto mb-6" />

                <h3 className="text-2xl font-black">
                  {item}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* QUOTE */}

      <section className="py-28 px-6 bg-[#071120] font-serif">

        <div className="max-w-5xl mx-auto text-center">

          <FaNewspaper className="text-5xl text-cyan-400 mx-auto mb-8" />

          <h2
            className="
              text-3xl
              md:text-4xl

              font-black

              text-white

              leading-tight

              mb-8
            "
          >
            “Hard work, faith,
            dedication and vision
            can transform every
            struggle into success.”
          </h2>

          <p className="text-white/70 text-lg leading-9">
            Shri Ankit Jain “Prince” continues to inspire
            society through spirituality, creativity,
            leadership, digital innovation and social
            service dedicated towards positive impact.
          </p>

        </div>

      </section>
    </>
  );
}