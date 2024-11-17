import React from 'react';
import BackgroundImage from '../images/b2.jpg';


const ContactUs = () => {
  return (
    <div className="flex flex-col items-center ">
      {/* Header Section */}
      <header
        className="relative w-full h-[200px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-600 to-black-500 opacity-70"></div>
        <h1 className="relative text-4xl font-bold text-white ">Contact <span className='text-green-200'>Us</span></h1>
      </header>

      {/* Contact Info Section */}
      <section className="w-full  mx-auto py-12 px-6 bg-green-900 ">
     
        <h2 className="text-center text-2xl font-semibold mb-6 text-white">Get in touch</h2>
        <p className="text-center mb-8 font-contactUs"> Hubungi Kami dibawah ini 
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Location Card */}
          <div className="bg-white p-6 shadow-lg hover:bg-green-500 hover:text-white transition-colors duration-300">
            <div className="text-3xl mb-4 text-center">📍</div>
            <h3 className="text-xl font-bold mb-2 font-contactUs text-center">Location</h3>
            <p className='font-contactUs text-center' >Jl. Gajah Mada No. 54a, Babura Kecamatan Medan Baru, Suamtera Utara 20153</p>
          </div>

          {/* Email Card */}
          <div className="bg-white text-center p-6  shadow-lg hover:bg-green-900 hover:text-white transition-colors duration-300">
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="text-xl font-bold mb-2 font-contactUs text-center">Email Us</h3>
            <p className="font-contactUs text center">rebornlatahzan
              @gmail.com </p>
          </div>

          {/* Call Us Card */}
          <div className="bg-white p-6  shadow-lg hover:bg-green-200 hover:text-white transition-colors duration-300">
            <div className="text-3xl mb-4 text-center">📞</div>
            <h3 className="text-xl font-bold mb-2 font-contactUs text-center">Call Us</h3>
            <p className="font-contactUs text-center">Phone: +6281263339222</p>
          </div>

          {/* Send Ticket Card */}
          <div className="bg-white p-6  shadow-lg hover:bg-green-400 hover:text-white transition-colors duration-300">
            <div className="text-3xl mb-4 text-center">🎫</div>
            <h3 className="text-xl font-bold mb-2 text-center">Send Ticket</h3>
            <p className="font-contactUs text-center">@latahzan_reborn</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ContactUs;
