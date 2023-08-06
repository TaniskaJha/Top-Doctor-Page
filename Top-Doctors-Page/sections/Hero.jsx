import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-start items-start gap-3 ">
        <div className="flex-1 ">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} mb-4`}>
  <span className="cis">Find the </span>
  <span className="iq"> Best </span>
  <span className="cis">Cardiologists in Bhubaneshwar</span>
  
</motion.h1>
<motion.h1 variants={textVariant(1.1)} className={styles.SubHeading}>
  <span className="cis">Get all your heart issues treated with the best doctors in town! Now with us find the best cardiologists in Bhubaneshwar.</span>
</motion.h1>

          
          <div className="flex flex-col gap-5 mt-8">
  <motion.button
    className="w-[40%] h-[65px] text-white font-bold rounded-full bg-blue-500"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Book Appointment
  </motion.button>

  <motion.button
    className="w-[40%] h-[65px] text-blue-500 font-bold rounded-full bg-white  border-2 border-blue-500"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Download App
  </motion.button>
</div>


        </div>

        <motion.div
          variants={slideIn('left', 'tween', 0.9, 1)}
          className="relative w-full md:-mt-[1px] -mt-[2px] flex w-1/2 justify-end"
        >
          <div className="absolute w-[300px] h-[355px] hero-gradient rounded-tl-[140px] z-[0] -top-[10px]" />
          <img
            src="/doc.png"
            alt="hero_cover"
            className="w-full sm:h-[380px] w-[450px] object-cover rounded-tl-[50px] z-10 relative"
          />
        </motion.div>
      </div>

      <a href="#explore">
        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10"></div>
      </a>
    </motion.div>
  </section>
);

export default Hero;
