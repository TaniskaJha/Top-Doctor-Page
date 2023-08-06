import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

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
      <div className="flex justify-center items-center gap-2 ">
        <div className="flex-1 ">
          <div className="flex justify-center items-center flex-col"> {/* Centering */}
            <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} mb-2`}>
              <span className="cis">Why </span>
              <span className="iq">choose </span>
              <span className="cis">us?</span>
            </motion.h1>

            <motion.h1 variants={textVariant(1.1)} className={styles.SubHeading}>
              <span className="cis">We want you and your heart to be healthy so you can live a happy life!</span>
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-8">
        <motion.img
          src="j.png"
          alt="Image at the top"
          className="w-[740px] h-[505px] float-left mr-3 mb-3 rounded-[10px]"
        />
        <motion.img
          src="Female.png"
          alt="Image at the top"
          className="w-[740px] h-[605px] float-left mr-3 mb-3 rounded-[10px]"
        />
      </div>
    </motion.div>
  </section>
);

export default About;
