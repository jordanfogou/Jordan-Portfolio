import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: 'Programmation et Scripting',
    items: [
      { name: 'C#', icon: '/csharp.png' },
      { name: 'C++', icon: '/cpp.png' },
      { name: '.NET Core', icon: '/dotnet.png' },
      { name: 'React', icon: '/react.jpg' },
      { name: 'HTML/CSS', icon: '/htmlcss.png' },
      { name: 'PHP', icon: '/php.png' },
    ],
  },
  {
    title: 'Mes Atouts',
    items: [
      { name: "Esprit d'équipe" },
      { name: 'Adaptabilité' },
      { name: 'Dynamique' },
      { name: 'Proactivité' },
      { name: 'Communication' },
    ],
  },
  {
    title: 'Réseau et Systèmes',
    items: [
      { name: 'Cisco Packet Tracer', icon: '/cisco.png' },
      { name: 'Wireshark', icon: '/wireshark.jpg' },
      { name: 'Nmap', icon: '/nmap.jpg' },
      { name: 'Active Directory', icon: '/active-directory.png' },
      { name: 'TCPdump', icon: '/tcpdump.jpg' },
    ],
  },
  
  {
    title: 'Technologies et Outils',
    items: [
      { name: 'Visual Studio', icon: '/visual-studio.png' },
      { name: 'SQL Server', icon: '/sql-server.png' },
      { name: 'Git', icon: '/git.png' },
      { name: 'Figma', icon: '/figma.png' },
      { name: 'Docker', icon: '/docker.png' },
      { name: 'Linux', icon: '/linux.png' },
    ],
  },
  
  
  {
    title: 'À propos de moi',
    items: [
      { name: '-Mentor bénévole à l\'Afev depuis 2023' },
      { name: '-Certification CCNA1' },
      { name: '-Bilingue Français & (Anglais - B1)' },
      { name: '-Pratique du Football' },
      { name: '- Cryptomonaie et Voyages ' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 text-white z-10">
      <motion.h3
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Mes Compétences & Atouts
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-blue-950 p-4 rounded-md shadow-sm border border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
              scale: 1.01,
              boxShadow: '0px 0px 5px rgba(128, 90, 213, 0.2)', // Ombre légère et discrète
            }}
          >
            <h4 className="text-lg md:text-xl font-semibold mb-4 text-center">{skill.title}</h4>
            <ul className="list-none space-y-2">
              {skill.items.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base font-light flex items-center">
                  {item.icon ? (
                    <img src={item.icon} alt={item.name} className="w-6 h-6 mr-2" />
                  ) : null}
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
