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



<div className="flex justify-center items-center gap-6 ">
        <div className="flex-1 ">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} mb-11`}>
  <span className="cis">Hear from our </span>
  <span className="iq"> happy  </span>
  <span className="cis">customers </span>
  
</motion.h1>

</div></div>
      

      {/* Container for white boxes */}
      <motion.div variants={staggerContainer} className="w-full mt-[8px] flex flex-row items-center justify-center gap-28">
        {/* White Box 1 */}
        <motion.div
          className="w-full md:w-[500px] h-[400px] bg-white rounded-lg p-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Xavier Adam</h2>
          <h5 className="text mb-4">“I recently used this online doctor appointment booking service, and I must say, it exceeded my expectations. The website's user-friendly interface made scheduling an appointment a breeze. Within minutes, I found a suitable doctor, selected a convenient time slot, and received a confirmation email. The best part was the wide selection of doctors and medical specialties available. I highly recommend this platform to anyone seeking a hassle-free way to book doctor appointments online.”</h5>
          
          <div className="flex flex-col  gap-8 mt-2">
          <motion.img
            src="m1.png" 
            alt="Image 2"
            className="w-[200px] h-[200px]"
          /></div>

        </motion.div>

       
        


        {/* White Box 2 */}
        <motion.div
          className="w-full md:w-[500px] h-[400px] bg-white rounded-lg p-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Dinesh Samanth</h2>
          <h5 className="text mb-4">“I can't believe I didn't start using this online doctor appointment booking platform sooner! It has truly saved me time and effort. With my busy schedule, finding the right doctor and coordinating appointments used to be a nightmare. But this service has made the whole process seamless. I appreciate the ability to view doctors' profiles, read patient reviews, and book appointments with just a few clicks. Plus, I received timely reminders, ensuring I never miss an appointment. Excellent service overall!”</h5>
          <div className="flex flex-col  gap-8 mt-2">
          <motion.img
            src="m2.png" 
            alt="Image 2"
            className="w-[200px] h-[200px]"
          /></div>

        </motion.div>

       



        
       

      </motion.div>
    </motion.div>
    
    <div style={{ height: '400px' }}></div>
  </section>
);

export default About;
