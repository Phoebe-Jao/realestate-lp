import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PhotoGallery() {
  const images = [
  'slide_img-01.jpg',
  'slide_img-02.jpg',
  'slide_img-03.jpg',
  'slide_img-04.jpg',
  'slide_img-05.jpg',
  'slide_img-06.jpg',
  'slide_img-07.jpg',
];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setCurrent(([prev]) => {
      const newIndex = (prev + newDirection + images.length) % images.length;
      return [newIndex, newDirection];
    });
  };

  const goToSlide = (index: number) => {
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
  };

  return (
    <section className="bg-foreground">
      <div className="container">
        <h3 className="font-cinzel uppercase text-[2rem] text-background text-center mb-14">Photo Gallery</h3>
        <div className="relative w-full">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 w-9 h-9 rounded-full hover:opacity-50 transition-opacity duration-500 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="absolute top-[0.65rem] left-2 text-foreground text-[1rem]" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 w-9 h-9 rounded-full hover:opacity-50 transition-opacity duration-500 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowRight} className="absolute top-[0.65rem] left-2 text-foreground text-[1rem]" />
          </button>
          <div className="relative w-full h-[400px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full"
              >
                <Image
                  src={`/assets/images/${images[current]}`}
                  alt={`Slide ${current + 1}`}
                  fill
                  className="object-cover max-w-[70%] mx-auto"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute bottom-[-4rem] left-[14.5%] max-sm:hidden flex gap-2 z-10 bg-foreground/60 p-2 rounded">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-14 h-10 relative cursor-pointer transition-border duration-500 border ${i === current ? 'border-background rounded' : 'border-transparent'}`}
              >
                <Image
                  src={`/assets/images/${img}`}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className={`object-cover rounded transition-opacity duration-500 ${i !== current ? 'opacity-50' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}