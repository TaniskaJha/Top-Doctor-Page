import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, textVariant , slideIn} from '../utils/motion';

const GetStarted = () => {
  const lines = [
    'Check doctor profiles ',
    'Book appointments',
    'Receive your consultation',
    'Get your solutions',
    
  ];

  return (
    <section className={`${styles.paddings} relative z-10`}>
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
          <div className="absolute w-[400px] h-[355px] hero-gradient rounded-tl-[140px] rounded-tr-[30px]  z-[0] -top-[10px]" />
          <img
            src="/grp.png"
            alt="hero_cover"
            className="w-full sm:h-[380px] w-[550px] object-cover rounded-tl-[50px] z-10 relative"
          />
        </motion.div>
      
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} mb-4`}>
            <span className="cis">Life</span>
            <span className="iq"> Without </span>
            <span className="cis">pain & get back to being you</span>
          </motion.h1>

          <div className="flex flex-col gap-4">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
              
                <img src="/tick.svg" />
                <span>{line}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-5 mt-8">
            <motion.button
            className="w-[40%] h-[65px] text-white  rounded-full bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button></div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
