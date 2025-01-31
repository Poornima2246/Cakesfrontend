 
import cake from '../Asset/cake.png';
import React from 'react';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <div id="Home" className="relative bg-backimg bg-cover h-screen flex items-center overflow-hidden">
      <div className="container relative flex flex-col md:flex-row items-center justify-between gap-12 bg-back top-10 lg:top-5">
        <div className="max-w-lg text-center md:text-left">
          <motion.h1  
          initial = {{y:-100 , opcacity: 0}}
          animate = {{y:0 , opcacity:1}}
          transition  = {{duration:1.5}}

          className="md:-mt-72 text-4xl md:text-5xl font-script text-white mb-2">
            Indulge in <span className="font-fntprimary text-primary">Sweet Elegance</span>
          </motion.h1>
          <motion.p 
             initial = {{y:-100 , opcacity: 0}}
             animate = {{y:0 , opcacity:1}}
             transition  = {{duration:1}}
          className="text-balck text-normal mb-3">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-
          </motion.p>
          <motion.button 
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 105, 180)" }}
          className="bg-white  text-pink-500 px-8 py-3 rounded-full font-medium   hover:shadow-lg hover:shadow-pink-600 transition-colors">
            Order Now
          </motion.button>
        </div>
        <div className="-mt-20 md:-mt-40 flex-shrink-0 w-[600px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
          <motion.img 
           initial = {{x:-100 , opcacity: 0}}
           animate = {{x:0 , opcacity:1}}
           transition  = {{duration:0.8}}
            src={cake}
            alt=""
            className="lg:w-[650px] h-[350px] md:h-[450px] object-cover rounded-full animate-float"
          />
        </div>
      </div>
    </div>
  );
}