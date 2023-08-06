import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, textVariant, slideIn } from '../utils/motion';

const GetStarted = () => {
  const lines = [
    'Full Name',
    'Email',
    'Phone Number',
 
  ];

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="flex justify-center items-center mb-11">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`}>
          
          <span className="iq">Contact </span>
          <span className="cis">Us </span>
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
              src="/contact.png"
              alt="hero_cover"
              className="w-full sm:h-[380px] w-[750px] object-cover rounded-tl-[10px] z-10 relative"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} mb-4`}>
            <span className="iq">Details :</span>
            
          </motion.h1>

          <div className="flex flex-col gap-4">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-gray-400 bg-opacity-50 border-2 border-blue-500 px-6 py-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                
                <span>{line}</span>
              </motion.div>
            ))}
          </div>

         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
