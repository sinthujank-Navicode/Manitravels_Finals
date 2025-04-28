"use client";
import { motion } from "framer-motion";

export default function Section1() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 relative overflow-hidden">
      {/* Background Zoom Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center"
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
      <div className="flex flex-col justify-center items-center text-center bg-white bg-opacity-20 p-6 md:p-12 w-full md:w-1/2 min-h-[400px] md:min-h-[600px] 2xl:min-h-[750px] relative md:rounded-l-3xl z-10">
        {/* Small Paragraph */}
        <p className="text-base md:text-md text-gray-800 mb-4">
          __ As an independent entity,
          <br className="hidden md:block" />
          we provide supportive and neutral
          <br className="hidden md:block" />
          governance to our coalition
        </p>

        {/* Big Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          TRAVEL
          <br /> AROUND <br />
          THE WORLD
        </h1>
      </div>

      {/* Overlay Image (only Desktop) */}
      <div className="absolute hidden md:block top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-20">
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
