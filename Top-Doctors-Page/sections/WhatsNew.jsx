import { motion } from 'framer-motion';
import styles from '../styles';
import { planetVariants, staggerContainer, fadeIn, textVariant } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div className="flex justify-center items-center gap-2">
        <div className="flex-1">
          <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} mb-2`}>
            <span className="cis">Why </span>
            <span className="iq">chose </span>
            <span className="cis">us?</span>
          </motion.h1>

          <motion.h1 variants={textVariant(1.1)} className={styles.SubHeading}>
            <span className="cis">We want you and your heart to be healthy so you can live a happy life!</span>
          </motion.h1>
        </div>
      </div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
        style={{ textAlign: 'right' }}
      >
        <img src="/Female.png" alt="get-started" className="w-[500px] h-[900px] object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
