// src/components/Contact.js - Version professionnelle nettoyée
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

// Composant Planet corrigé
const Planet = () => {
  const { scene } = useGLTF('/planet/scene.gltf');
  const planetRef = useRef();

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={planetRef} object={scene} scale={3.5} />;
};

// Loader 3D unifié
const Loader3D = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div 
          className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin mb-2"
          style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
        />
        <span className="text-white text-sm">Chargement du modèle 3D...</span>
      </div>
    </Html>
  );
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_546fis9',
        'template_7xgx6gu',
        form.current,
        '4pnLIpL7mb2J9eGcn'
      )
      .then(
        (result) => {
          alert('Votre message a été envoyé avec succès.');
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          alert("Une erreur est survenue lors de l'envoi de votre message.");
        }
      );
  };

  return (
    <section className="section-unified" id="contact">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête professionnel */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="title-dev text-dev-xl mb-4">
            Contactez-moi
          </h3>
          <p className="text-dev-md max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Prêt à collaborer ? Parlons de votre projet !
          </p>
        </motion.div>

        <div className="grid-dev">
          
          {/* Canvas 3D */}
          <motion.div 
            className="w-full h-[500px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden card-dev">
              <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 5]} />
                <OrbitControls enableZoom={false} />
                <Suspense fallback={<Loader3D />}>
                  <Planet />
                </Suspense>
              </Canvas>
            </div>
          </motion.div>

          {/* Formulaire de contact unifié */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card-dev form-dev">
              <div className="text-center mb-6">
                <h4 className="title-dev text-dev-lg mb-2">
                  Envoyez-moi un message
                </h4>
                <p className="text-dev-sm" style={{ color: 'var(--text-secondary)' }}>
                  Je suis disponible pour échanger et ouvert à vos offres.
                </p>
              </div>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-dev-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Votre nom
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Quel est votre nom ?"
                    className="input-dev"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-dev-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Votre email
                  </label>
                  <input
                    type="email"
                    name="sender"
                    placeholder="Quelle est votre adresse ?"
                    className="input-dev"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-dev-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Votre message..."
                    className="input-dev resize-none"
                    rows="4"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-dev text-dev-sm flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Envoyer le message
                </button>
              </form>

              {/* Informations de contact */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-secondary)' }}>
                <div className="text-center">
                  <h5 className="text-dev-sm font-semibold mb-4" style={{ color: 'var(--accent-primary)' }}>
                    Informations de contact
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-3 text-dev-sm" style={{ color: 'var(--text-secondary)' }}>
                      <FaEnvelope style={{ color: 'var(--accent-primary)' }} />
                      <span>jordanfogou443@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-dev-sm" style={{ color: 'var(--text-secondary)' }}>
                      <FaPhone style={{ color: 'var(--accent-primary)' }} />
                      <span>+33 (0) 6 13 99 27 20</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-dev-sm" style={{ color: 'var(--text-secondary)' }}>
                      <FaMapMarkerAlt style={{ color: 'var(--accent-primary)' }} />
                      <span>Île-de-France, France</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer de section */}
        <motion.div
          className="text-center mt-12 text-dev-sm"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Merci de votre visite !
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;