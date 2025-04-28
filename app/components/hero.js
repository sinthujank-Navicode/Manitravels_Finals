"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Section1() {
 
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between p-6 relative md:mt-0 mt-5 overflow-hidden">
  {/* Background Zoom Animation */}
  <motion.div
    className="absolute top-0  left-0 w-full h-full z-[-1] bg-cover bg-center rounded-2xl  md:mx-[7rem] " 
    style={{ backgroundImage: "url('/background01.jpg')" }}
   
  />


      
     {/* First Box - Text Section */}
     <div className="flex flex-col justify-center items-center text-center z-[40] bg-white bg-opacity-20 p-6 md:p-12 w-full md:w-[50%] min-h-[600px] 2xl:min-h-[750px] relative md:rounded-l-3xl">
     {/* Small Paragraph */}
  <p className="text-md text-gray-800">
    __ As an independent entity,<br /> we provide supportive and neutral<br /> governance to our coalition
  </p>

  {/* Big Heading */}
  <h1 className="text-5xl md:text-7xl font-extrabold">
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

{/* Second Box - Image Section (only Desktop) */}
<div className="hidden md:flex relative p-12 w-[50%] min-h-[600px] 2xl:min-h-[750px] justify-center border-16 border-white rounded-r-3xl"></div>
</section>
  );
}