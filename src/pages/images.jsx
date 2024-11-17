import React from "react";
import Img1 from "../images/1.jpg";
import Img2 from "../images/2.jpg";
import Img3 from "../images/2.png";
import Img4 from "../images/2.png";
import Img5 from "../images/2.png";
import Img6 from "../images/4.png";
import Img7 from "../images/Logo Orange.png";
import Img8 from "../images/Logo Orange.png";
import Img9 from "../images/4.jpg";
import Img10 from "../images/2.png";
import Img11 from "../images/4.png";
import Img12 from "../images/4.jpg";

const image = [
  { src: Img1, alt: "Kashi Vishwanath Temple 1" },
  { src: Img2, alt: "Kashi Vishwanath Temple 2" },
  { src: Img3, alt: "Kashi Vishwanath Temple 3" },
  { src: Img4, alt: "Kashi Vishwanath Temple 4" },
  { src: Img5, alt: "Kashi Vishwanath Temple 5" },
  { src: Img6, alt: "Kashi Vishwanath Temple 6" },
  { src: Img7, alt: "Kashi Vishwanath Temple 7" },
  { src: Img8, alt: "Kashi Vishwanath Temple 8" },
  { src: Img9, alt: "Kashi Vishwanath Temple 9" },
  { src: Img10, alt: "Kashi Vishwanath Temple 10" },
  { src: Img11, alt: "Kashi Vishwanath Temple 11" },
  { src: Img12, alt: "Kashi Vishwanath Temple 12" },
];

const images = () => {
  return (
    <div className=" w-full bg-green-900">
      <div className="mx-auto p-4 pt-20 md:pt-24 container"></div>
      <h1 className="text-3xl md:text-5xl font-bold text-green-500 text-center py-10 ">
        Galery Latahzan
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {image.map((image, index) => (
          <div key={index} className="grid gap-4">
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default images;
