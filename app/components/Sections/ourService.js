export default function Services() {
    const services = [
      {
        title: "Visa Consulting",
        description:
          "Get expert visa advice, document preparation, interview guidance, and professional assistance for success.",
      },
      {
        title: "All Online Appointments",
        description:
          "Book visa, passport, medical, and travel appointments easily with online scheduling.",
      },
      {
        title: "Airport Transportation",
        description:
          "Book visa, passport, medical, and travel appointments easily with online scheduling.",
      },
      {
        title: "Travel Insurance And Itinerary",
        description:
          "Get travel insurance for health, cancellations, and baggage loss, and personalized itineraries.",
      },
      {
        title: "Translation ( English, Dutch )",
        description:
          "Get professional translation for travel documents, visas, and communications in English, Dutch.",
      },
      {
        title: "Legal Document Support",
        description:
          "Assistance with legal documents related to immigration, travel, and consular services.",
      },
      {
        title: "Embassy Appointment Booking",
        description:
          "Get help booking embassy appointments and understanding visa application procedures.",
      },
      {
        title: "Document Courier Service",
        description:
          "Fast and secure document pickup and delivery service for visa or legal documents.",
      },
    ];
  
    return (
      <section className="bg-white md:px-5 px-1 md:py-12 py-4 relative " id="service ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Services
      </h2>
    
      <div className="relative">
        {/* Left Fade Effect */}
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
    
        {/* Right Fade Effect */}
        <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
    
        {/* Scrollable Row */}
        <div className="overflow-x-auto no-scrollbar relative z-10 ">
          <div className="inline-flex gap-4 px-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#E6EDF3] w-[250px] rounded-3xl flex-shrink-0 transition-transform duration-200"
              >
                <div className="bg-[#6E95BE] p-6 text-white flex flex-col items-center justify-center min-h-[160px] rounded-t-3xl">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="font-semibold text-center">{service.title}</h3>
                </div>
                <div className="p-4 text-sm text-gray-700 min-h-[120px] rounded-b-3xl">
                  {service.description}
                </div>
                <div className="p-4">
                  <button className="w-full border border-black rounded-full py-1 hover:bg-black hover:text-white transition-all duration-200">
                    Get in Touch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    

    
    );
  }