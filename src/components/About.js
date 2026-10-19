import { FaLaptopCode, FaServer, FaChartBar, FaUsers } from 'react-icons/fa';
import Section from './Section';
import { about, services } from '../data';

const icons = {
  front: FaLaptopCode,
  back: FaServer,
  data: FaChartBar,
  lead: FaUsers,
};

export default function About() {
  return (
    <Section id="a-propos" title="À propos de moi" intro={about}>
      <ul className="services">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <li key={service.title} className="service-card">
              <Icon className="service-icon" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
