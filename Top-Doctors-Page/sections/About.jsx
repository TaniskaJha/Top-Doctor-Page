import { motion } from 'framer-motion';


import styles from '../styles';
import { staggerContainer,textVariant } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >

<motion.img
        src="searchbar.png" 
        alt="Image at the top"
        className="w-[54%] h-[85px] float-left mr-7 mb-7"
      />

<div className="flex justify-center items-center gap-2 ">
        <div className="flex-1 ">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} mb-2`}>
  <span className="cis">Take a look at our list of </span>
  <span className="iq"> specialized  </span>
  <span className="cis">doctors</span>
  
</motion.h1>

<motion.h1 variants={textVariant(1.1)} className={styles.SubHeading}>
  <span className="cis">Explore our list of specialized cardiologists and get treated by the  doctors in the required field</span>
</motion.h1></div></div>
      

      {/* Container for white boxes */}
      <motion.div variants={staggerContainer} className="w-full mt-[8px] flex flex-row items-center justify-center gap-28">
        {/* White Box 1 */}
        <motion.div
          className="w-full md:w-[300px] h-[270px] bg-white rounded-lg p-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Dr. Aditya Dutta</h2>
          <div className="flex flex-col  mt-2">
            <motion.button
            className="w-[56%] h-[28px] text-white  rounded-full bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            cardialogist
          </motion.button></div>
          {/* Image */}
          <div className="flex flex-col  gap-8 mt-2">
          <motion.img
            src="l2.png" 
            alt="Image 2"
            className="w-[70%] h-[100px]"
          /></div>
          <div className="flex flex-col  gap-8 mt-2">
          <motion.img
            src="d2.png" 
            alt="Image 2"
            className="w-[300px] h-[200px]"
          /></div>

        </motion.div>

       
        


        {/* White Box 2 */}
        <motion.div
          className="w-full md:w-[300px] h-[270px] bg-white rounded-lg p-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Dr. Aditya Dutta</h2>
          <div className="flex flex-col  mt-2">
            <motion.button
            className="w-[56%] h-[28px] text-white  rounded-full bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            cardialogist
          </motion.button></div>
          {/* Image */}
          <div className="flex flex-col  gap-8 mt-2">
          <motion.img
            src="l2.png" // Replace with the actual path to your image
            alt="Image 2"
            className="w-[70%] h-[100px]"
          /></div>
            <div className="flex flex-col  gap-8 mt-2">
          <motion.img
            src="d1.png" 
            alt="Image 2"
            className="w-[300px] h-[200px]"
          /></div>
        </motion.div>
       



        {/* White Box 3 */}
        <motion.div
          className="w-full md:w-[300px] h-[270px] bg-white rounded-lg p-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Dr. Aditya Dutta</h2>
          <div className="flex flex-col  mt-2">
            <motion.button
            className="w-[56%] h-[28px] text-white  rounded-full bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            cardialogist
          </motion.button></div>
          {/* Image */}
          <div className="flex flex-col  gap-8 mt-2">
          <motion.img
            src="l2.png" // Replace with the actual path to your image
            alt="Image 2"
            className="w-[70%] h-[100px]"
          /></div>

<div className="flex flex-col  gap-8 mt-2">
          <motion.img
            src="d3.png" 
            alt="Image 2"
            className="w-[300px] h-[200px]"
          /></div>
        </motion.div>
       

      </motion.div>
    </motion.div>
  </section>
);

export default About;
