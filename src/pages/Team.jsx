import React, { useState } from "react";
import player1 from "../images/Team/rendy.png";
import player1Hover from "../images/Team/hover.jpg";
import player2 from "../images/Team/rendy.png";
import player2Hover from "../images/Team/hover.jpg";
import player3 from "../images/Team/rendy.png";
import player3Hover from "../images/Team/hover.jpg";
import player4 from "../images/Team/rendy.png";
import player4Hover from "../images/Team/hover.jpg";
import backgroundImage from "../images/2.jpg"; // Import gambar latar belakang

import choach from "../images/flyer 1.png";
import choachHover  from"../images/flyer 1.png";
import choach2 from "../images/flyer 1.png";
import choachHover2 from "../images/flyer 1.png";

// Komponen untuk menampilkan kartu pemain
const PlayerCard = ({ player }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center bg-white shadow-lg  w-64 h-64 transform transition-transform duration-300 cursor-pointer overflow-hidden ${
        isHovered ? "scale-105 translate-y-2" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? player.hoverImage : player.image}
        alt="Player"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// Komponen utama Players dan Coach
const PlayersAndCoach = () => {
  const players = [
    {
      image: player1,
      hoverImage: player1Hover,
    },
    {
      image: player2,
      hoverImage: player2Hover,
    },
    {
      image: player3,
      hoverImage: player3Hover,
    },
    {
      image: player4,
      hoverImage: player4Hover,
    },
    {
      image: player1,
      hoverImage: player1Hover,
    },
    {
      image: player2,
      hoverImage: player2Hover,
    },
    {
      image: player3,
      hoverImage: player3Hover,
    },
    {
      image: player4,
      hoverImage: player4Hover,
    },
  ];

  const coaches = [
    {
      image: choach,
      hoverImage: choachHover,
    },
    {
      image: choach2,
      hoverImage: choachHover2,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center min-h-screen p-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>

      

      {/* Coach Section */}
      <div className="relative z-10 pt-20 md:pt-24">
        <h2 className="text-7xl font-bold text-white text-left mb-8 md:pl-8 tracking-widest">
          COACH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
          {coaches.map((coach, index) => (
            <PlayerCard key={index} player={coach} />
          ))}
        </div>
      </div>
      {/* Players Section */}
      <div className="relative z-10 pt-20 md:pt-24">
        <h2 className="text-7xl font-bold text-white text-left mb-8 md:pl-8 tracking-widest">
          PLAYERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayersAndCoach;
