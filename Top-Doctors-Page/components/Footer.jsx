import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-black`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Top-Doctors-Page
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enabling everyday people to lead a healthy life
          </span>
        </button>
      </div>

      <div className="flex flex-row justify-between">
        {/* Left side paragraph */}
        <div className="text-white flex-col">
          <p>
          Book doctor appointments online and get your ailments treated in no time with our expert medical support systems. Get rid of all your medical problem with our expert panel of doctors who guide you towards a healthier life.
          </p>
          <img
          src="call.png"
          alt="Image at the top"
          className="w-[440px] h-[50px] float-left mr-3 mb-3 rounded-[10px]"
        />

      
         
        </div>
        

        {/* Right side columns */}
        <div className="flex gap-10">
          <div>
            <h5 className="text-white font-bold text-lg">Services</h5>
            <ul className="text-white">
              <li>appointments</li>
              <li>lab tests</li>
              <li>A-Z medicine</li>
              <li>doctor support</li>
        
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-lg">Legal</h5>
            <ul className="text-white">
              <li>General info</li>
              <li>Privacy Policy</li>
              <li>Terms of services</li>
              <li>Consultation</li>
           
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-lg">Talk to Us</h5>
            <ul className="text-white">
              <li>support@notinline.com</li>
              <li>appointment@notinline.com</li>
              <li>+91 12345 67899</li>
              <li>+91 97642 09752</li>
             
            </ul>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex gap-4">
        {socials.map((social) => (
          <img
            key={social.name}
            src={social.url}
            alt={social.name}
            className="w-[24px] h-[24px] object-contain cursor-pointer"
          />
        ))}
      </div>
    </div>
  </motion.footer>
);

export default Footer;
