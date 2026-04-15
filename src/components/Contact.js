// src/components/Contact.js — Version propre et sobre
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Planet = () => {
  const { scene } = useGLTF('/planet/scene.gltf');
  const planetRef = useRef();
  useFrame(() => {
    if (planetRef.current) planetRef.current.rotation.y += 0.005;
  });
  return <primitive ref={planetRef} object={scene} scale={3.5} />;
};

const Loader3D = () => (
  <Html center>
    <div className="flex flex-col items-center">
      <div 
        className="w-7 h-7 border-2 border-t-transparent rounded-full animate-spin mb-2"
        style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
      />
      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Chargement...</span>
    </div>
  </Html>
);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_546fis9', 'template_7xgx6gu', form.current, '4pnLIpL7mb2J9eGcn')
      .then(
        () => {
          alert('Message envoyé avec succès !');
          form.current?.reset();
        },
        () => {
          alert("Erreur lors de l'envoi. Réessayez ou contactez-moi directement par email.");
        }
      );
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'jordanfogou443@gmail.com' },
    { icon: <FaPhone />, text: '+33 (0) 6 13 99 27 20' },
    { icon: <FaMapMarkerAlt />, text: 'Île-de-France, France' }
  ];

  return (
    <section className="section-unified" id="contact">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="title-dev title-gradient text-dev-xl mb-3">
            Contact
          </h3>
          <p className="text-dev-md max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Un projet en tête ? N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid-dev">
          
          {/* 3D Planet */}
          <motion.div 
            className="w-full h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full rounded-xl overflow-hidden card-dev">
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 5]} />
                <OrbitControls enableZoom={false} />
                <Suspense fallback={<Loader3D />}>
                  <Planet />
                </Suspense>
              </Canvas>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-dev">
              <h4 className="text-dev-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                Envoyez-moi un message
              </h4>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                Disponible pour échanger sur une opportunité d'alternance.
              </p>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Nom
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Votre nom"
                    className="input-dev"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="sender"
                    placeholder="votre@email.com"
                    className="input-dev"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Votre message..."
                    className="input-dev resize-none"
                    rows="4"
                    required
                  />
                </div>
                
                <button type="submit" className="w-full btn-dev justify-center">
                  <FaPaperPlane className="mr-2" size={14} />
                  Envoyer
                </button>
              </form>

              {/* Contact info */}
              <div className="mt-6 pt-5 border-t" style={{ borderColor: 'var(--border-secondary)' }}>
                <div className="space-y-2.5">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>{info.icon}</span>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;