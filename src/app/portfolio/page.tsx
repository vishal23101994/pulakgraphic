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
    title: "Spiritual Transformation",
    desc:
      "Met Pujya Upadhyay Gyan Sagar Ji Maharaj which transformed his outlook towards religion, society and service.",
    icon: <FaHeart />,
  },

  {
    year: "1996",
    title: "Gyansagar Fabrics",
    desc:
      "Started entrepreneurial journey through surplus fabrics business.",
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
    year: "1997",
    title: "Association with Jain Saints",
    desc:
      "Connected with Pujya Tarun Sagar Ji Maharaj and Pujya Pulak Sagar Ji Maharaj.",
    icon: <FaPrayingHands />,
  },

  {
    year: "1998",
    title: "Pulak Jan Chetna Manch",
    desc:
      "Founded youth-based social and religious organization.",
    icon: <FaUsers />,
  },

  {
    year: "1998-2021",
    title: "Pulak Vani Magazine",
    desc:
      "Edited and managed Pulak Vani Monthly Magazine.",
    icon: <FaBookOpen />,
  },

  {
    year: "2004",
    title: "Pulak Graphics",
    desc:
      "Started professional printing and publication company.",
    icon: <FaPhotoVideo />,
  },

  {
    year: "2012",
    title: "Delhi Entry & Panchkalyanak",
    desc:
      "Played important role in Delhi Entry and Panchkalyanak Mahotsav.",
    icon: <FaAward />,
  },

  {
    year: "2015",
    title: "British Parliament Visit",
    desc:
      "Visited British Parliament with Pujya Pulak Sagar Ji Maharaj.",
    icon: <FaGlobe />,
  },

  {
    year: "2018",
    title: "Jinsharnam Media",
    desc:
      "Founded Jinsharnam Media and expanded spiritual outreach digitally.",
    icon: <FaBullhorn />,
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

            opacity-[10]

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
                  drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]

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

                  text-white/90
                  drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]

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

                  top-1/2
                  left-1/2

                  -translate-x-1/2
                  -translate-y-1/2

                  w-[380px]
                  h-[380px]

                  bg-gradient-to-r
                  from-cyan-400/15
                  via-blue-500/10
                  to-purple-500/15

                  rounded-full

                  blur-[120px]

                  z-0
                "
              />

              {/* PERSON IMAGE */}

              <div
                className="
                  relative
                  w-[380px]
                  h-[500px]
                  overflow-hidden
                  rounded-[60%_60%_60%_60%/60%_60%_60%_60%]
                  mx-auto       
                "
              >

                <img
                  src="/images/ankitjain1.png"
                  alt="Shri Ankit Jain"
                  className="
                    w-full
                    h-full

                    object-cover
                    object-top

                    drop-shadow-[0_30px_80px_rgba(0,0,0,0.55)]

                    scale-105
                  "
                />

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="py-28 px-6 bg-slate/800 font-serif">

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
                  saints including Pujya Pulak Sagar Ji Maharaj,
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

      {/* PRINCE NAME STORY */}

      <div
        className="
          my-16

          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-blue-700

          p-10

          text-white
          font-serif

          shadow-2xl
        "
      >

        <div className="text-center max-w-6xl mx-auto">

          <div className="text-sm uppercase tracking-[4px] text-white/70 mb-4">
            Identity & Blessings
          </div>

          <h3 className="text-2xl md:text-4xl font-black mb-6">
            The Story Behind
            <span className="block mt-2">
              “Prince”
            </span>
          </h3>

          <p className="text-lg md:text-xl leading-9 text-white/90">

            In <strong>1997</strong>, during his close association with
            <strong> Pujya Pulak Sagar Ji Maharaj</strong>,
            Ankit Jain received a special blessing that became a part of
            his identity forever.

            <br /><br />

            Impressed by his dedication, enthusiasm and service towards
            religion and society, <strong>Pujya Pulak Sagar Ji Maharaj</strong>
            lovingly gave him the name

            <span className="font-black text-2xl block my-5">
              “Prince”
            </span>

            Since then, this name has become his popular identity among
            family members, social circles, followers and the Jain community.
            Today, most people know him affectionately as
            <strong> Ankit Jain "Prince"</strong>.

          </p>

        </div>

      </div>

      {/* JOURNEY */}

      <section className="py-28 px-6 bg-white font-serif">

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
      <div className="border-t border-blue-200 my-0" />

      {/* FAMILY TREE */}

      <section className="py-28 px-6 bg-slate-50 font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <div className="text-blue-600 font-bold mb-4">
              FAMILY TREE
            </div>

            <h2 className="text-4xl font-black mb-6">
              Family Heritage
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              The strong family values, unity and spiritual environment
              played an important role in shaping the life and journey
              of Shri Ankit Jain "Prince".
            </p>

          </div>

          {/* GRANDPARENTS */}

          <div className="flex justify-center">

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-[30px] px-10 py-8 text-center shadow-2xl">

              <h3 className="text-2xl font-black">
                Shri Moolchand Jain
              </h3>

              <p className="text-white/70 my-2">&</p>

              <h3 className="text-2xl font-black">
                Smt. Gunmala Jain
              </h3>

              <p className="mt-3 text-white/80">
                Grandparents
              </p>

            </div>

          </div>

          {/* VERTICAL LINE */}

          <div className="flex justify-center">
            <div className="w-1 h-16 bg-blue-400"></div>
          </div>

          {/* HORIZONTAL CONNECTOR */}

          <div className="relative max-w-6xl mx-auto">

            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-1 bg-blue-300"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">

              {[
                "Shri Soraj Kumar Jain",
                "Smt. Shobha Jain",
                "Shri Sudhir Kumar Jain",
                "Shri Sushil Kumar Jain",
              ].map((person) => (

                <div key={person} className="flex flex-col items-center">

                  <div className="w-1 h-8 bg-blue-300"></div>

                  <div className="bg-white rounded-[24px] p-6 text-center shadow-lg border border-slate-100 w-full">

                    <h4 className="font-bold">
                      {person}
                    </h4>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* SURAJ FAMILY CONNECTOR */}

          <div className="flex justify-center mt-8">

            <div className="w-1 h-16 bg-blue-400"></div>

          </div>

          {/* PARENTS */}

          <div className="flex justify-center">

            <div className="bg-white rounded-[28px] p-8 shadow-xl border border-slate-100 text-center max-w-md">

              <h3 className="text-2xl font-black">
                Shri Soraj Kumar Jain
              </h3>

              <p className="text-blue-600 font-semibold my-2">
                Married To
              </p>

              <h3 className="text-xl font-bold">
                Smt. Manju Jain
              </h3>

            </div>

          </div>

          {/* LINE */}

          <div className="flex justify-center">
            <div className="w-1 h-16 bg-blue-400"></div>
          </div>

          {/* CHILDREN CONNECTOR */}

          <div className="relative max-w-5xl mx-auto">

            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-1 bg-cyan-300"></div>

            <div className="grid md:grid-cols-4 gap-6 pt-6">

              {/* MEENU */}

              <div className="flex flex-col items-center">

                <div className="w-1 h-8 bg-cyan-300"></div>

                <div className="bg-white rounded-[24px] p-6 text-center shadow-lg">

                  <h4 className="font-bold">
                    Meenu Jain
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Married to
                  </p>

                  <p className="text-sm">
                    Shri Parrvin Jain
                  </p>

                </div>

              </div>

              {/* KAVITA */}

              <div className="flex flex-col items-center">

                <div className="w-1 h-8 bg-cyan-300"></div>

                <div className="bg-white rounded-[24px] p-6 text-center shadow-lg">

                  <h4 className="font-bold">
                    Kavita Jain
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Married to
                  </p>

                  <p className="text-sm">
                    Shri Vivek Jain
                  </p>

                </div>

              </div>

              {/* ANKIT */}

              {/* ANKIT */}

              <div className="flex flex-col items-center">

                <div className="w-1 h-8 bg-cyan-300"></div>

                <div
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500

                    text-white

                    rounded-[24px]

                    p-6

                    text-center

                    shadow-xl
                  "
                >

                  <h4 className="font-bold">
                    Shri Ankit Jain
                    <br />
                    "Prince"
                  </h4>

                  <p className="text-white/80 mt-2 text-sm">
                    Married to
                  </p>

                  <p className="text-sm">
                    Smt. Sarika Jain
                  </p>

                </div>

                {/* CHILD CONNECTOR */}

                <div className="w-1 h-10 bg-cyan-300"></div>

                <div className="w-40 h-1 bg-cyan-300"></div>

                <div className="grid grid-cols-2 gap-4 mt-4 w-full">

                  {/* SON */}

                  <div
                    className="
                      bg-blue-50

                      border
                      border-blue-200

                      rounded-[20px]

                      p-4

                      text-center

                      shadow-md
                    "
                  >
                    <div className="text-xs text-blue-600 font-semibold mb-1">
                      SON
                    </div>

                    <h5 className="font-bold text-slate-800">
                      Aashya Jain
                    </h5>
                  </div>

                  {/* DAUGHTER */}

                  <div
                    className="
                      bg-pink-50

                      border
                      border-pink-200

                      rounded-[20px]

                      p-4

                      text-center

                      shadow-md
                    "
                  >
                    <div className="text-xs text-pink-600 font-semibold mb-1">
                      DAUGHTER
                    </div>

                    <h5 className="font-bold text-slate-800">
                      Aashriya Jain
                    </h5>
                  </div>

                </div>

              </div>

              {/* ANKUR */}

              <div className="flex flex-col items-center">

                <div className="w-1 h-8 bg-cyan-300"></div>

                <div className="bg-white rounded-[24px] p-6 text-center shadow-lg">

                  <h4 className="font-bold">
                    Ankur Jain
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Married to
                  </p>

                  <p className="text-sm">
                    Smt. Priyanka Jain
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <div className="border-t border-blue-200 my-0" />


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
      <div className="border-t border-blue-200 my-0" />

      {/* BRITISH PARLIAMENT */}

      <section className="py-28 px-6 bg-[#071120] font-serif">

        <div className="max-w-6xl mx-auto text-center">

          <div className="text-cyan-400 font-bold mb-5">
            INTERNATIONAL RECOGNITION
          </div>

          <h2 className="text-4xl font-black text-white mb-10">
            British Parliament Visit
            <br />
            London • 2015
          </h2>

          <p className="text-white/70 text-lg leading-9 max-w-5xl mx-auto">
            Shri Ankit Jain accompanied Pujya Pulak Sagar Ji Maharaj
            to the British Parliament during the Bharat Gaurav Samman
            ceremony. This historic occasion remains one of the most
            memorable and inspiring milestones of his life.
          </p>

        </div>

      </section>
      <div className="border-t border-blue-200 my-0" />

      {/* HONORS */}

      <section className="py-28 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
              Honors & Recognitions
            </h2>

            <p className="text-gray-600 text-lg">
              Awards and recognitions received for social service and religious contribution.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              "Yuva Ratna",
              "Pulak Ratna",
              "Samaj Ratna",
              "Other Honors",
            ].map((item) => (

              <div
                key={item}
                className="
                  rounded-[32px]
                  bg-slate-50
                  p-10
                  text-center
                  shadow-lg
                "
              >

                <FaMedal className="text-4xl text-blue-600 mx-auto mb-6" />

                <h3 className="text-xl font-black">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
      <div className="border-t border-blue-200 my-0" />
      

      {/* DIGITAL MEDIA */}

      <section className="py-28 px-6 bg-[#071120] font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <div className="text-cyan-400 font-bold mb-5">
              DIGITAL PRESENCE
            </div>

            <h2 className="text-4xl font-black text-white mb-8">
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

                <div className="text-4xl text-cyan-400 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-5">
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
      <div className="border-t border-blue-200 my-0" />

      {/* QUALITIES */}

      <section className="py-28 px-6 bg-white font-serif">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-6">
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

                <h3 className="text-xl font-black">
                  {item}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      <div className="border-t border-blue-200 my-0" />

      {/* QUOTE */}

      <section className="py-28 px-6 bg-[#071120] font-serif">

        <div className="max-w-5xl mx-auto text-center">

          <FaNewspaper className="text-4xl text-cyan-400 mx-auto mb-8" />

          <h2
            className="
              text-2xl
              md:text-3xl

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