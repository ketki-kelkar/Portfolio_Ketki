import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from './hoc';
import { technologies,Languages,sw } from './constants';
import { styles } from './styles';
import { textVariant } from './utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <div className='text-center'>{technology.name}</div>
          </div>
        ))}
      </div>
      <br /><br />

      <motion.div variants={textVariant()}>
        <h1 className='font-bold text-3xl'>Programming Languages</h1>
        {/* <h5 className={styles.sectionHeadTextLight}>Programming Languages</h5> */}
      </motion.div>      

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {Languages.map((Languages) => (
          <div className="w-28 h-28" key={Languages.name}>
            <BallCanvas icon={Languages.icon} />
            <div className='text-center'>{Languages.name}</div>
          </div>
        ))}
      </div>
      <br /><br />

      <motion.div variants={textVariant()}>
        <h1 className='font-bold text-3xl'>Softwares</h1>
        {/* <h5 className={styles.sectionHeadTextLight}>Programming Languages</h5> */}
      </motion.div>      

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {sw.map((sw) => (
          <div className="w-28 h-28" key={sw.name}>
            <BallCanvas icon={sw.icon} />
            <div className='text-center'>{sw.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
