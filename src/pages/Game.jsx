import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// Import gambar langsung
import Game1 from '../images/1.png';
import Game2 from '../images/1.png';
import Game3 from '../images/1.png';

// Data game
const games = [
  {
    id: 1,
    image: Game1,
    date: 'Tue, Nov 19 | 7:30 PM',
    event: 'CUP NIGHT & COLLECTIBLE PIN NIGHT',
    teams: 'NOP vs. DAL',
  },
  {
    id: 2,
    image: Game2,
    date: 'Fri, Nov 22 | 9:00 PM',
    event: 'CUP NIGHT',
    teams: 'DAL @ DEN',
  },
  {
    id: 3,
    image: Game3,
    date: 'Sun, Nov 24 | 5:00 PM',
    event: '',
    teams: 'DAL @ MIA',
    id: 4,
    image: Game1,
    date: 'Tue, Nov 19 | 7:30 PM',
    event: 'CUP NIGHT & COLLECTIBLE PIN NIGHT',
    teams: 'NOP vs. DAL',
  },
  {
    id: 5,
    image: Game2,
    date: 'Fri, Nov 22 | 9:00 PM',
    event: 'CUP NIGHT',
    teams: 'DAL @ DEN',
  },
  {
    id: 6,
    image: Game3,
    date: 'Sun, Nov 24 | 5:00 PM',
    event: '',
    teams: 'DAL @ MIA',
  },
];

const GameCardsCarousel = () => {
  return (
    <div className="w-full bg-green-900 py-10 pt-20 md:pt-24">
      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                {/* Gambar dengan rasio 1:1 */}
                <div className="w-full aspect-square bg-gray-200 overflow-hidden rounded-lg mb-4">
                  <img
                    src={game.image}
                    alt={`Game ${game.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Teks Detail */}
                <div>
                  <p className="text-sm text-gray-500 font-medium">{game.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1">
                    {game.event || 'GAME NIGHT'}
                  </h3>
                  <p className="text-md font-bold text-blue-600 mt-2">{game.teams}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GameCardsCarousel;
