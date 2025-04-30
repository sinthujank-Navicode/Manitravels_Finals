import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from 'react-icons/bs';


// Export the ContactSection component
export default function ContactSection() {
  return (
    // Outer section with padding top/bottom and left/right, white background
    <section className="py-5 px-1 md:px-6 bg-white overflow-hidden" id="contact">
      
      {/* Heading for Contact Us, centered */}
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

      {/* Main container with light blue background, rounded corners, padding, and responsive grid */}
      <div className="bg-[#E6EDF3] rounded-2xl p-4 md:p-10 lg:p-20 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">

        {/* Left Side Start */}
        <div className="flex flex-col gap-6">
          
        
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10">
        
        {/* Address */}
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-3xl text-black shrink-0" />
          <div>
            <p className="text-[15px] font-medium leading-tight">NO 312 Sea Street, Colombo - 11</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#3a5fb4] text-[14px] font-semibold hover:underline">
              Open in map
            </a>
          </div>
        </div>

        {/* Mobile Phone */}
        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-3xl text-black shrink-0" />
          <div>
            <p className="text-[15px] font-medium leading-tight">+94 774 725 978</p>
            <a href="tel:+94774725978" className="text-[#3a5fb4] text-[14px] font-semibold hover:underline">
              Call now
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-3xl text-black shrink-0" />
          <div>
            <p className="text-[15px] font-medium leading-tight">commani187@gmail.com</p>
            <a href="mailto:commani187@gmail.com" className="text-[#3a5fb4] text-[14px] font-semibold hover:underline">
              Send mail
            </a>
          </div>
        </div>

        {/* Landline */}
        <div className="flex items-start gap-4">
          <BsFillTelephoneFill className="text-3xl text-black shrink-0" /> 
          <div>
            <p className="text-[15px] font-medium leading-tight">011 239 144 6</p>
            <a href="tel:0112391446" className="text-[#3a5fb4] text-[14px] font-semibold hover:underline">
              Call now
            </a>
          </div>
        </div>

      </div>
   

          {/* Embedded Google Map */}
          <div className="overflow-hidden rounded-lg mt-6">
            <iframe
              src="https://maps.google.com/maps?q=Colombo%2011&t=&z=13&ie=UTF8&iwloc=&output=embed" // Google map iframe link
              width="120%" // Making iframe a bit wider
              height="450" // Height of iframe
              style={{ border: 0 }} // No border
              allowFullScreen="" // Allow full screen
              loading="lazy" // Load iframe lazily for performance
              referrerPolicy="no-referrer-when-downgrade" // Referrer policy for iframe
            ></iframe>
          </div>
        </div>
        {/* Left Side End */}

        {/* Right Side Start */}
        <div>
          {/* Form Title */}
          <h3 className="text-2xl font-bold mb-2">SEND US MESSAGE</h3>
          
          {/* Description Paragraph */}
          <p className="text-gray-700 mb-6 text-md">
            Sample text. Click to select the text box. Click again or double click to start editing the text.
          </p>

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            {/* Name Input Field */}
            <input
              type="text"
              placeholder="Enter your Name"
              className="px-4 py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            {/* Email Input Field */}
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="px-4 py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Message Textarea Field */}
            <textarea
              placeholder="Enter your message"
              rows="8"
              className="px-4 py-3 rounded-3xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 px-8 py-2 text-black border border-black rounded-full hover:bg-black hover:text-white transition font-semibold text-sm self-start"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Right Side End */}

      </div>
      {/* Main Container End */}
    </section>
    // Section End
  );
}