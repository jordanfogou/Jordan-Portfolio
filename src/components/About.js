import { motion } from 'framer-motion';
import { FaLaptopCode, FaPlug, FaChartBar, FaUsers } from 'react-icons/fa';
import Section from './Section';
import { about, services } from '../data';
import { fadeUp, inView, stagger } from '../motion';

const icons = {
  front: FaLaptopCode,
  back: FaPlug,
  data: FaChartBar,
  lead: FaUsers,
};

export default function About() {
  return (
    <Section id="a-propos" title="À propos de moi" intro={about}>
      <motion.ul className="services" variants={stagger(0.12)} {...inView}>
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <motion.li
              key={service.title}
              className="service-card"
              variants={fadeUp()}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="service-icon-wrap">
                <Icon className="service-icon" aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}
