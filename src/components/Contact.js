import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import emailjs from 'emailjs-com';

const Planet = () => {
  const { scene } = useGLTF('/planet/scene.gltf');
  const planetRef = useRef();

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={planetRef} object={scene} scale={2.5} />;
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_546fis9',
      'template_7xgx6gu',
      form.current,
      '4pnLIpL7mb2J9eGcn'
    )
    .then((result) => {
        alert('Votre message a été envoyé avec succès.');
    }, (error) => {
        alert('Une erreur est survenue lors de l\'envoi de votre message.');
    });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-800 py-6 px-2 sm:px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 h-[400px] sm:h-[400px] flex items-center justify-center">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} />
          <OrbitControls enableZoom={false} />
          <Planet />
        </Canvas>
      </div>

      <div className="max-w-md bg-gradient-to-br from-black via-purple-800 to-gray-900 rounded-lg shadow-lg border-2 border-transparent p-6 w-full md:w-1/2 mt-6 md:mt-0 md:ml-4"
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.1)',
             borderColor: 'rgba(255, 255, 255, 0.6)',
             boxShadow: '0px 0px 20px rgba(128, 90, 213, 0.7), 0px 0px 30px rgba(255, 255, 255, 0.5)',
           }}
           whileHover={{
             boxShadow: '0px 0px 30px rgba(128, 90, 213, 1), 0px 0px 50px rgba(255, 255, 255, 0.8)',
           }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Contactez-moi</h2>
        <p className="text-sm sm:text-base text-gray-300 text-center mb-4">
          Je suis disponible pour échanger et ouvert à vos offres.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-300">Votre Nom</label>
            <input
              type="text"
              name="from_name"
              placeholder="Quel est votre nom ?"
              className="mt-1 block w-full p-2 border border-gray-700 bg-black text-white rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Votre email</label>
            <input
              type="email"
              name="sender"
              placeholder="Quelle est votre adresse ?"
              className="mt-1 block w-full p-2 border border-gray-700 bg-black text-white rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Votre Message</label>
            <textarea
              name="message"
              placeholder="Votre message"
              className="mt-1 block w-full p-2 border border-gray-700 bg-black text-white rounded focus:outline-none"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
