"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "/images/slider1.png",
  "/images/slide2.png",
  "/images/slider3.png",
  "/images/slider4.png",
  "/images/slider5.png",
  "/images/slider6.png",
  "/images/slider7.png",
  "/images/slider8.png",
];

const Slider = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden"> {/* ✅ Full width */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[500px]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="w-full h-full object-cover" // ✅ No cropping, full width
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
