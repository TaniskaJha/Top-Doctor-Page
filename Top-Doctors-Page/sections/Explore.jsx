import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, textVariant, slideIn } from '../utils/motion';

const GetStarted = () => {
  

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="flex justify-center items-center mb-11">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`}>
        <span className="cis">Download the  </span>
          <span className="iq">Notinline </span>
          <span className="cis">App</span>
        </motion.h1>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      
      >
        
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <motion.div
            variants={slideIn('left', 'tween', 0.9, 1)}
            className="relative w-full md:-mt-[1px] -mt-[2px] flex w-1/2 justify-end"
          >
           
            <img
              src="/phone.png"
              alt="hero_cover"
              className="w-full sm:h-[650px] w-[750px] object-cover rounded-tl-[10px] z-10 relative"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
         <motion.img
        src="call.png" 
        alt="Image at the top"
        className="w-[74%] h-[75px] float-left mr-7 mb-7 rounded-[10px]"
      />

<div className="flex flex-row gap-5 mt-8">
            <motion.button
             className="w-[40%] h-[65px] text-blue-500 font-bold  bg-gray-800 border-2 border-blue-400 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <img src="/icon2.png" alt="playstore" className="mr-2" />
             Play Store
            </motion.button>

            <motion.button
              className="w-[40%] h-[65px] text-blue-500 font-bold  bg-gray-800 border-2 border-blue-400 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/icon1.png" alt="playstore" className="mr-2" />
              App Store
            </motion.button>
          </div>


          

         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
