import { motion } from 'framer-motion';
import { fadeUp, inView } from '../motion';

// Enveloppe commune des sections : ancre, largeur, titre et intro qui apparaissent au défilement.
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section container">
      <motion.h2 className="section-title" variants={fadeUp()} {...inView}>
        {title}
      </motion.h2>
      {intro && (
        <motion.p className="section-intro" variants={fadeUp(0.1)} {...inView}>
          {intro}
        </motion.p>
      )}
      {children}
    </section>
  );
}
