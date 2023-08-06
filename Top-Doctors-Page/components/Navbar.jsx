import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[100%] h-[78%] inset-0 gradient-black-black " />

    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 relative items-center`}>
      <h2 className="font-extrabold text-[35px] leading-[30.24px] text-white relative z-10">
      <span className="cis">Not</span>
            <span className="iq">In</span>
            <span className="cis">line</span>
      </h2>

      <div className="container flex justify-center gap-8 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
        <h2 className="font-bold text-[20px] leading-[30.24px] text-black relative z-10">
          <span className="iq">Home</span>
        </h2>
        <h2 className=" text-[20px] leading-[30.24px] text-black relative z-10">
          <span className="cis">About Us</span>
        </h2>
        <h2 className="f text-[20px] leading-[30.24px] text-black relative z-10">
          <span className="cis">View Hospitals</span>
        </h2>
        <h2 className=" text-[20px] leading-[30.24px] text-black relative z-10">
          <span className="cis">Contact Us</span>
        </h2>
      </div>

      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[14px] object-contain relative z-10"
      />
    </div>
  </motion.nav>
);

export default Navbar;
