"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col text-white font-sans">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/bg-image.jpg"
          alt="Imagen de fondo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0  h-full  z-2 flex flex-col justify-center items-start w-[80%] md:w-[1000px]">
        <div className="flex justify-between items-center px-8 sm:px-20 py-4 border-b border-white border-t w-full">
          <motion.div
            className=""
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm sm:text-lg  tracking-wide">
              <span className="font-bold">20 YEARS EXPERIENCE</span> STRATEGIC
              AND CREATIVE COMMUNICATIONS PARTNER
            </span>
          </motion.div>
        </div>
        <div>
          <motion.div
            className="flex md:flex-row flex-col items-center justify-center text-center px-8 sm:px-20 mt-8 md:gap-8  border-b border-white w-full py-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col text-left w-full">
              <img
                src="/img/img-2.png"
                alt="Neta Comunica Logo"
                className="w-40 h-auto sm:w-48 md:w-64 lg:w-72 xl:w-80"
              />
            </div>
            <div className="text-left">
              <p className="mt-2 md:mt-8 text-sm sm:text-lg max-w-4xl leading-relaxed">
                FIERCELY INDEPENDENT AND REVOLUTIONARY, A FEARLESS AGENCY
                REPRESENTING BRANDS THAT REFUSE TO CONFORM. THRILL WITH THE
                EXCITEMENT OF ATTRACTING MEXICAN AND LATIN AMERICAN CONSUMERS,
                WHICH WILL DRIVE OPPORTUNITIES, PARTNERSHIPS, AND
                TRANSFORMATIONS. DO NOT BE AFRAID TO BE NETA.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-full px-8 sm:px-20 py-4 mt-4 md:mt-16 text-left max-w-[600px]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm sm:text-4xl font-bold flex items-center">
              TRUTH IS RELATIVE, BUT NETA IS ABSOLUTE
              <Image
                src="/img/img-1.png"
                alt="Estrellita"
                className="ml-2 sm:w-6 sm:h-6 md:mt-12"
                width="60"
                height="60"
              />
            </h3>
          </motion.div>
        </div>
        <div className="flex px-8 md:px-20 gap-4">
          <Link
            href="https://www.instagram.com/netacomunica/"
            target="_blank"
            className="text-fuchsia-600 hover:text-pink-800 text-xl sm:text-2xl"
            aria-label="Instagram"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="27px"
                  height="27px"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </div>
            </motion.div>
          </Link>
          <Link
            href="https://www.linkedin.com/company/neta-comunica/"
            target="_blank"
            className="text-fuchsia-600 hover:text-pink-800 text-xl sm:text-2xl"
            aria-label="LinkedIn"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </div>
            </motion.div>
          </Link>
          <Link
            href="mailto:neta@netacomunicacion.mx"
            className="text-fuchsia-600 hover:text-pink-800 text-xl sm:text-2xl"
            aria-label="Email"
            target="_blank"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
