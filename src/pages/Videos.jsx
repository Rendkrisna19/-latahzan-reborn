import React from "react";
import backgroundImage from "../images/bg3.png";
import Video1 from "../Media/Videos/bg.mp4";

const Videos = () => {
  return (
    <div
      className="media-page min-h-screen bg-cover bg-center pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Judul */}
      <h1 className="text-5xl md:text-7xl font-bold text-green-500 text-center py-10 ">
        Video Video <span className="text-green-700">Latahzan</span>
      </h1>

      {/* Kontainer Video */}
      <div className="container mx-auto px-4 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Video */}
          <div className="video-card bg-white shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* Aspect ratio 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${Video1}?autoplay=0`} // Pastikan autoplay diatur ke 0
                title="Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="video-card bg-white shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* Aspect ratio 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${Video1}?autoplay=0`} // Pastikan autoplay diatur ke 0
                title="Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-card bg-white shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* Aspect ratio 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${Video1}?autoplay=0`} // Pastikan autoplay diatur ke 0
                title="Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="video-card bg-white shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* Aspect ratio 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${Video1}?autoplay=0`} // Pastikan autoplay diatur ke 0
                title="Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="video-card bg-white shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* Aspect ratio 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${Video1}?autoplay=0`} // Pastikan autoplay diatur ke 0
                title="Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="video-card bg-white shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* Aspect ratio 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${Video1}?autoplay=0`} // Pastikan autoplay diatur ke 0
                title="Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
