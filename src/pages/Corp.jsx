import React from 'react'
import BackgroundImage from '../images/b2.jpg';
import image1 from '../images/patnerimages/Arka Parfume.png';
import image2 from '../images/patnerimages/FEB UISU.jpg';
import image3 from '../images/patnerimages/Poppin Coffee.png';
import image4 from '../images/patnerimages/Pro Property.png';
import Gambar from '../images/Logo Hijau.png';

const Corp = () => {
  return (
    <div className='flex flex-col'>
      <header
        className="relative w-full h-[200px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-600 to-black-500 opacity-70"></div>
        <h1 className="relative text-4xl font-bold text-white ">Corp</h1>
      </header>

      <section className='bg-patner py-10'>
  <h1 className='relative text-4xl font-bold text-white text-center mb-5'>Latahzan <span className='text-green-900'>Corporation</span></h1>
  <div className='flex justify-center items-center'>
  <a href="https://www.arka-parfume.com" target="_blank" rel="noopener noreferrer">
    <img className='align-center justify-items-center grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75' src={Gambar} alt="Latahzan Logo" />
    </a>
  </div>
</section>

      <section className="py-10 bg-patner">
        <h1 className='relative text-4xl font-bold text-white text-center mb-5'>Sponsorship</h1>
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          <a href="https://www.arka-parfume.com" target="_blank" rel="noopener noreferrer">
            <img
              src={image1}
              alt="Arka Parfume"
              className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
            />
          </a>
          <a href="https://www.feb-uisu.ac.id" target="_blank" rel="noopener noreferrer">
            <img
              src={image2}
              alt="FEB UISU"
              className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
            />
          </a>
          <a href="https://www.poppincoffee.com" target="_blank" rel="noopener noreferrer">
            <img
              src={image3}
              alt="Poppin Coffee"
              className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
            />
          </a>
          <a href="https://www.proproperty.com" target="_blank" rel="noopener noreferrer">
            <img
              src={image4}
              alt="Pro Property"
              className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Corp;
