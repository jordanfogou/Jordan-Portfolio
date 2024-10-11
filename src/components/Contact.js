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

  return <primitive ref={planetRef} object={scene} scale={3.5} />; // Augmentation de la taille du globe
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
        },
        (error) => {
          alert("Une erreur est survenue lors de l'envoi de votre message.");
        }
      );
  };

  return (
    <div className="bg-transparent py-6 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 h-[500px] flex items-center justify-center">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} />
          <OrbitControls enableZoom={false} />
          <Planet />
        </Canvas>
      </div>

      <div className="max-w-md bg-blue-950 rounded-md shadow-sm border border-gray-600 p-4 w-full md:w-1/2 mt-6 md:mt-0 md:ml-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-3">Contactez-moi</h2>
        <p className="text-sm sm:text-base text-gray-300 text-center mb-3">
          Je suis disponible pour échanger et ouvert à vos offres.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-300">Votre Nom</label>
            <input
              type="text"
              name="from_name"
              placeholder="Quel est votre nom ?"
              className="mt-1 block w-full p-2 border border-gray-700 bg-blue-950 text-white rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Votre email</label>
            <input
              type="email"
              name="sender"
              placeholder="Quelle est votre adresse ?"
              className="mt-1 block w-full p-2 border border-gray-700 bg-blue-950 text-white rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Votre Message</label>
            <textarea
              name="message"
              placeholder="Votre message"
              className="mt-1 block w-full p-2 border border-gray-700 bg-blue-950 text-white rounded focus:outline-none"
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
