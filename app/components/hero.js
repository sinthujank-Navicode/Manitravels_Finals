"use client";
import { motion } from "framer-motion";
import { Bebas_Neue, Montserrat } from 'next/font/google';

// Initialize the fonts
const bebasNeue = Bebas_Neue({
  weight: ['400'], // Bebas Neue typically only has one weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function Section1() {
  return (
    <section className={`${bebasNeue.variable} ${montserrat.variable} h-[89vh] md:mx-6 mx-3 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 relative overflow-hidden rounded-2xl`}>
      {/* Background Zoom Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url('/background01.jpg')" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      
      {/* First Box - Text Section */}
      <div className="flex flex-col justify-center items-start text-start z-[40] bg-white bg-opacity-20 p-6 md:p-12 w-full md:w-[50%] min-h-[600px] 2xl:min-h-[750px] relative md:rounded-l-3xl">
        {/* Small Paragraph */}
        <p className="text-md text-gray-800 font-sans">
          __ As an independent entity,<br /> we provide supportive and neutral<br /> governance to our coalition
        </p>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-5xl md:text-7xl font-normal mt-10 tracking-wider" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
          TRAVEL<br /> AROUND <br />THE WORLD
        </h1>
      </div>

      {/* Overlay Image (only Desktop) */}
      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-[45] hidden md:block">
        <motion.img
          src="/flight.jpg"
          alt="Destination"
          className="max-w-[1100px] h-[390px] object-cover"
          animate={{ y: [0, -60, 60, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Second Box - Image Section (empty with border for future use) */}
      <div className="hidden md:flex relative p-12 w-1/2 min-h-[400px] md:min-h-[600px] 2xl:min-h-[750px] justify-center border-16 border-white rounded-r-3xl"></div>
    </section>
  );
}