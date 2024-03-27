import React, { useCallback, useEffect, useState } from "react";
// import Portwedcss from "./Portwed.css";
// import bimg22 from "../subassets/bagris images/_AJU0463.jpg";
import bimg23 from "../subassets/bagris images/_AJU0468.jpg";
// import bimg24 from "../subassets/bagris images/_AJU0756 2.jpg";
// import bimg25 from "../subassets/bagris images/_AJU0756.jpg";
// import bimg26 from "../subassets/bagris images/_AJU0803.jpg";
// import bimg27 from "../subassets/bagris images/_AJU0863.jpg";
// import { Carousel } from "react-bootstrap";

import bimg11 from "../subassets/bagris images/_AJU0109.jpg";
// import bimg1 from "../subassets/bagris images/_AJU0014.jpg";
import bimg2 from "../subassets/bagris images/_AJU0038.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiTwirlyFlower } from "react-icons/gi";

const Portwed = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { name: "pic-1", src: bimg11 },
    { name: "pic-2", src: bimg2 },
    { name: "pic-3", src: bimg2 },
    { name: "pic-4", src: bimg23 },
  ];

  const handlePrev = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, handleNext]);

  return (
    <div className="Portwed">
      <div className="bg-gray-200 relative mx-auto overflow-hidden max-w-screen-xl -z-30">
        <div
          className=" w-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full select-none"
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-60 sm:h-[30rem] object-cover -z-30"
              />
            </div>
          ))}
        </div>
        <IoIosArrowBack
          className="prev-button absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-color_gray  text-xl sm:text-2xl md:text-5xl"
          onClick={handlePrev}
        ></IoIosArrowBack>
        <IoIosArrowForward
          className="next-button absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-color_gray text-xl sm:text-2xl md:text-5xl"
          onClick={handleNext}
        ></IoIosArrowForward>
      </div>
      <div className="bg-white p-4 mt-5  sm:p-20  flex items-center justify-center gap-10">
        <div className="hidden sm:block">
          <GiTwirlyFlower size={50} color="red" className="animate-spin" />
        </div>

        <p className="w-full  sm:p-10 rounded-md bg-white">
          "In the dance of love, the wedding day is the exquisite choreography
          where two hearts synchronize, creating a symphony of vows, laughter,
          and shared dreams – a moment when every glance speaks volumes, and
          every promise is etched into the fabric of forever."
        </p>

        <div className="hidden sm:block">
          <GiTwirlyFlower size={50} color="red" className="animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default Portwed;
