import React from 'react';
import { motion } from 'framer-motion';
import { styles } from './styles';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from './hoc';

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        My name is Ketki, and I aspire to become a proficient web developer with a deep passion for crafting captivating and user-friendly websites. Currently, I am diligently working towards honing my skills in HTML, CSS, JavaScript, and React, alongside pursuing my second year of a B.Tech. degree in Computer Science.
        <br />
        My unwavering commitment to self-improvement drives me to seek out new challenges that allow me to enhance my abilities and explore the boundaries of what is conventionally considered achievable. I firmly believe in pushing my own limits to continuously elevate my craft.
        <br />
        One of my key principles is a dedication to delivering high-quality work that fulfills the requirements of clients and ultimately enhances the experience of end-users. I understand the importance of meeting and surpassing expectations by paying meticulous attention to detail and incorporating user-centric design principles. By doing so, I strive to create seamless and engaging digital experiences.
        <br />
        If you are in search of an individual who exhibits unwavering passion for their craft and is fully committed to producing exceptional outcomes, I assure you that your search ends here. Let us join forces and collaborate to transform concepts into reality, bringing your vision to life in a way that exceeds expectations.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, 'about');
