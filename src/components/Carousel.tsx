import { useState } from "react";
import type { ImageMetadata } from "astro";

interface CarouselProps {
  imgList: ImageMetadata[];
}

export default function Carousel({ imgList }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imgList.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imgList.length) % imgList.length);
  };

  return (
    <div className="relative w-full max-w-4xl ">
      {/* Slides */}
      <div className="relative h-70 md:h-96 border-b-8 border-slate-300 rounded-xl">
        {imgList.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-contain  transition-opacity duration-700 rounded-b-md ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Botón anterior */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer top-3/4 left-0 -translate-y-1/2 bg-slate-300/90  rounded-4xl p-2"
      >
        <svg
          className="w-5 h-5 md:w-8 md:h-8 text-azul rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer top-3/4 right-0 -translate-y-1/2 bg-slate-300/90  rounded-4xl p-2"
      >
        <svg
          className="w-5 h-5 md:w-8 md:h-8 text-azul rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 5 7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute max-w-11/12 overflow-hidden -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 flex gap-3 bg-fondo px-4 py-2 rounded-4xl">
        {imgList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "bg-azul scale-110"
                : "bg-slate-500/40 hover:bg-azul/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
