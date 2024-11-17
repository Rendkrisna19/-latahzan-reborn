import React from "react";
import backgroundImage from "../images/bg3.png"; 

const Videos = () => {
  return (
    <div className="media-page min-h-screen bg-cover bg-center pt-20 md:pt-24"
    
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      {/* Judul */}
      <h1 className="text-5xl md:text-7xl font-bold text-green-500 text-center py-10 ">
        Video Video Latahzan
      </h1>

      {/* Kontainer Video */}
      <div className="container mx-auto px-4 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Video */}
          <div className="video-card bg-white shadow-lg overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-card bg-white shadow-lg  overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-card bg-white shadow-lg  overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/3fumBcKC6RE"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-card bg-white shadow-lg  overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/3fumBcKC6RE"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-card bg-white shadow-lg  overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/3fumBcKC6RE"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-card bg-white shadow-lg  overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/3fumBcKC6RE"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
