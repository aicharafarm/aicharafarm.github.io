'use client'
import React from 'react';
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const images = [
  { src: "/images/farm1.jpeg", alt: "Gallery Image 1", description: "Farm house view from front." },
  { src: "/images/farm2.jpeg", alt: "Gallery Image 2", description: "Farm house view from left." },
  { src: "/images/farm3.jpeg", alt: "Gallery Image 3", description: "Sunset over the farm." },
  { src: "/images/farm4.jpeg", alt: "Gallery Image 4", description: "Freshly churned homemade ghee." },
  { src: "/images/farm5.jpeg", alt: "Gallery Image 5", description: "Local farm food." },
  { src: "/images/farm6.jpeg", alt: "Gallery Image 6", description: "Newly sprouted wheat shoots." },
  { src: "/images/farm7.jpeg", alt: "Gallery Image 7", description: "Golden sunset over a peaceful farm." },
  { src: "/images/farm_groundnut1.jpeg", alt: "Gallery Image 8", description: "Lush green groundnut fields at sunrise." },
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-opacity-90 py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Gallery</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="rounded-lg"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    maxWidth: '800px',
                    height: 'auto',
                    maxHeight: '600px',
                  }}
                />
                <p className="mt-4 mb-2 text-center text-sm text-gray-700">{image.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const GalleryPage = () => {
  return (
    <div className="bg-pink-100">
      <Header />
      <div className="container mx-auto p-4 md:p-6">
        <Gallery />
      </div>
        <Footer/>
    </div>
  );
};

export default GalleryPage;
