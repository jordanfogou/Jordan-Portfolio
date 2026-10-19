import { Suspense, lazy, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { emailjsConfig, profile } from '../data';
import { inView, slideIn } from '../motion';

const Earth = lazy(() => import('./Earth'));

export default function Contact() {
  const formRef = useRef(null);
  const [state, setState] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setState('sending');
    emailjs
      .sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, formRef.current, {
        publicKey: emailjsConfig.publicKey,
      })
      .then(() => {
        setState('sent');
        formRef.current?.reset();
      })
      .catch(() => setState('error'));
  };

  return (
    <section id="contact" className="section container contact">
      <motion.div className="contact-panel" variants={slideIn('left')} {...inView}>
        <h2 className="section-title">Contact</h2>
        <p className="contact-lead">
          Vous cherchez un stagiaire de fin d’études en full-stack ou en data à partir de février 2027 ?
          Laissez-moi un message, ou écrivez directement à{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label>
            <span>Votre nom</span>
            <input type="text" name="from_name" required autoComplete="name" />
          </label>
          <label>
            <span>Votre email</span>
            <input type="email" name="sender" required autoComplete="email" />
          </label>
          <label>
            <span>Votre message</span>
            <textarea name="message" rows="6" required />
          </label>
          <button type="submit" className="button" disabled={state === 'sending'}>
            {state === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
          </button>
          <p className="form-status" role="status">
            {state === 'sent' && 'Message envoyé. Je vous réponds rapidement.'}
            {state === 'error' &&
              `Le message n’est pas parti. Réessayez, ou écrivez à ${profile.email}.`}
          </p>
        </form>
      </motion.div>

      <motion.div className="contact-earth" variants={slideIn('right', 0.1)} {...inView}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </motion.div>
    </section>
  );
}
