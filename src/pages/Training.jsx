import React from 'react'
import lokasi1 from "../images/Logo Orange.png"
import lokasi2 from "../images/Logo Orange.png"
import backgroundImage from "../images/bg3.png"; 

const Training = () => {
  return (
    
    <div className="flex flex-col items-center p-4 bg-patner pt-20 md:pt-24 relative bg-cover bg-center min-h-screen p-8  "
    
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    
    >
      
      {/* Header */}
      <header className="w-full mb-8">
        <h1 className="text-5xl font-bold text-center md:text-center md:text-6xl text-white">
         Training
        </h1>
      </header>

      {/* Grid Images */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" >
        <img
          src={lokasi2}
          alt="Gambar 1"
          className="w-64 aspect-square border-4 border-gray-300 object-cover"
        />
        <img
          src={lokasi1}
          alt="Gambar 2"
          className="w-64 aspect-square border-4 border-gray-300 object-cover"
        />
      </section>

      {/* Google Maps */}
      <section className="w-full max-w-4xl">
        <iframe
          className="w-full aspect-video border-4 border-gray-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63711.658582188145!2d98.63211793873579!3d3.5923677888019503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031310b15672383%3A0x5f7bba30799bc827!2sGor%20Samudra!5e0!3m2!1sid!2sid!4v1731830650795!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Training ;
