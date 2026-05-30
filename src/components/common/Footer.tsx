"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaPinterestP,
  FaBloggerB,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaYoutube className="text-[#FF0000]" />,
    url: "https://youtube.com/@jinsharnammedia?si=7H1TrEVFK6rjI5qu",
    hover: "hover:bg-red-600",
  },

  {
    icon: <FaFacebookF className="text-[#1877F2]" />,
    url: "https://www.facebook.com/Jinsharnammedia",
    hover: "hover:bg-[#1877F2]",
  },

  {
    icon: <FaInstagram className="text-[#E1306C]" />,
    url: "https://www.instagram.com/jinsharnam_media",
    hover: "hover:bg-[#E1306C]",
  },

  {
    icon: <FaTwitter className="text-[#1877F2]" />,
    url: "https://x.com/jinsharnamedia",
    hover: "hover:bg-[#1877F2]",
  },

  {
    icon: <FaLinkedinIn className="text-[#0077B5]" />,
    url: "https://www.linkedin.com/company/jinsharnammedia/",
    hover: "hover:bg-[#0077B5]",
  },

  {
    icon: <FaTelegramPlane className="text-[#0088cc]" />,
    url: "https://t.me/Jinsharnam_Media",
    hover: "hover:bg-[#0088cc]",
  },

  {
    icon: <FaPinterestP className="text-[#E60023]" />,
    url: "https://www.pinterest.com/jinsharnam/",
    hover: "hover:bg-[#E60023]",
  },

  {
    icon: <FaBloggerB className="text-[#FF5722]" />,
    url: "https://jindharnam.blogspot.com/",
    hover: "hover:bg-[#FF5722]",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050814] text-white font-serif overflow-hidden">

      {/* TOP LINE */}

      <div
        className="
          h-[4px]

          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-purple-600
        "
      />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.8fr] gap-16">

          {/* BRAND */}

          <div>

            <Link
              href="/"
              className="flex items-center gap-4 mb-8"
            >

              <div className="relative w-20 h-20">

                <Image
                  src="/logo1.png"
                  alt="Pulak Graphics"
                  fill
                  className="
                    rounded-full
                    object-cover
                  "
                />

              </div>

              <div>

                <h2
                  className="
                    text-3xl
                    font-black
                  "
                >
                  Pulak

                  <span className="text-blue-500 ml-2">
                    Graphics
                  </span>

                </h2>

                <p className="text-slate-400">
                  Creative Studio
                </p>

              </div>

            </Link>

            <p
              className="
                text-slate-400
                leading-8
                max-w-md
              "
            >
              Print • Publication • Media •
              Live Coverage

              <br />

              Delivering creative and
              professional visual solutions
              for brands, businesses and events.

            </p>

            {/* SOCIAL */}

            <div className="flex items-center gap-5 mt-12 flex-wrap">

              {socials.map((social, index) => (

                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-[22px]

                    transition-all
                    duration-300

                    hover:-translate-y-2
                    hover:scale-110
                  "
                >
                  {social.icon}
                </a>

              ))}

            </div>
            

          </div>
          

          {/* SERVICES */}

          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-8
              "
            >
              Services
            </h3>

            <div className="space-y-5">

              {[
                "Printing",
                "Publication",
                "Media Coverage",
                "Live Events",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3

                    text-slate-400

                    hover:text-white

                    transition
                  "
                >

                  <FaArrowRight
                    className="
                      text-blue-500
                    "
                  />

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* LINKS */}

          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-8
              "
            >
              Quick Links
            </h3>

            <div className="space-y-5">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([title, url]) => (

                <Link
                  key={title}
                  href={url}
                  className="
                    block

                    text-slate-400

                    hover:text-white

                    transition
                  "
                >
                  {title}
                </Link>

              ))}

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-4
                leading-tight
              "
            >
              <span className="text-blue-500">
                Media Partner
              </span>

            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">

                {/* LOGO */}
                <div className="relative w-14 h-14 shrink-0">

                  <Image
                    src="/logo_new.png"
                    alt="Jinsharnam Media"
                    fill
                    className="object-contain"
                  />

                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">
                    Jinsharnam Media
                  </h4>

                  <a
                    href="https://jinsharnammedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block
                      mt-1

                      text-cyan-400
                      text-sm

                      hover:text-white

                      transition-all
                      duration-300
                    "
                  >
                    🌐 www.jinsharnammedia.com
                  </a>

                </div>

              </div>
              {/* REGISTERED OFFICE */}

              <div className="flex items-start gap-5">

                <FaMapMarkerAlt
                  className="
                    text-blue-500
                    mt-2
                    shrink-0
                  "
                />

                <div className="text-slate-400 text-sm">

                  <div className="text-white font-semibold mb-1">
                    Registered Office
                  </div>

                  <div>
                    4/2771, Street Number 3,
                    <br />
                    Bihari Colony,
                    <br />
                    Shahdara, Delhi – 110032
                  </div>

                </div>

              </div>
              <div className="flex items-start gap-5">

                <FaMapMarkerAlt
                  className="
                    text-blue-500
                    mt-2
                    shrink-0
                  "
                />

                <div className="text-slate-400 text-sm">
                  <div className="text-white font-semibold mb-1">
                    Working Office
                  </div>

                  <div>
                    Vatsalya Bhawan
                  </div>

                  <div>
                    P-75, Street No. 5,
                    
                    Bihari Colony Extension,
                    
                    Shahdara, Delhi – 110032
                  </div>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaPhoneAlt className="text-blue-500" />

                <div className="text-slate-400 text-sm">

                  <div>
                    +91 9810900699
                  </div>

                  <div>
                    +91 9810900042
                  </div>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-blue-500" />

                <p className="text-slate-400 text-sm break-all">
                  ankitprince1979@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>
        {/* GST & ACCOUNT DETAILS */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">

          {/* GST DETAILS */}

          <div
            className="
              rounded-[24px]
              border border-slate-800
              bg-white/[0.03]
              backdrop-blur-sm
              p-8
            "
          >
            <h3
              className="
                text-xl
                font-bold
                text-white
                mb-6
              "
            >
              GST Details
            </h3>

            <div className="space-y-4">

              <div>
                <p className="text-slate-500 text-sm">
                  GSTIN
                </p>

                <p className="text-slate-300 font-medium text-lg">
                  07ACKPJ2504N1ZI
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Business Name
                </p>

                <p className="text-slate-300 font-medium">
                  M/S Pulak Graphics
                </p>
              </div>

            </div>

          </div>

          {/* BANK DETAILS */}

          <div
            className="
              rounded-[24px]
              border border-slate-800
              bg-white/[0.03]
              backdrop-blur-sm
              p-8
            "
          >
            <h3
              className="
                text-xl
                font-bold
                text-white
                mb-6
              "
            >
              Banking Details
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <p className="text-slate-500 text-sm">
                  Account Name
                </p>

                <p className="text-slate-300 font-medium">
                  M/S Pulak Graphics
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Account Number
                </p>

                <p className="text-slate-300 font-medium">
                  62506013924
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  IFSC Code
                </p>

                <p className="text-slate-300 font-medium">
                  SBIN0001281
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Bank Name
                </p>

                <p className="text-slate-300 font-medium">
                  State Bank of India
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div
        className="
          border-t
          border-slate-800
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-6
            py-8

            flex
            flex-col
            md:flex-row

            justify-between
            items-center

            gap-4
          "
        >

          <p className="text-slate-500">
            © 2026 Pulak Graphics. All Rights Reserved.
          </p>

          <p className="text-slate-500">
            Designed with ❤️ by Pulak Graphics
          </p>

        </div>

      </div>

    </footer>
  );
}