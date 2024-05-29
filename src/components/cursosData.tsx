import React from 'react';
import Image from 'next/image';

const HobbyData: React.FC = () => {
  const hobbies = [
    {
      name: "Desarrollo Web Completo con HTML5, CSS3, JS",
      image: "/img/cursos/cursoHTML.png",
      estado: "Terminado 🔴"
    },
    {
      name: "Laravel 8",
      image: "/img/cursos/cursoLaravel.png",
      estado: "Terminado 🔴"
    },
    {
      name: "React: De cero a experto ( Hooks y MERN )",
      image: "/img/cursos/cursoReact.png",
      estado: "En curso 🟢"
    },
    {
      name: "Universidad Python",
      image: "/img/cursos/cursopython.png",
      estado: "Terminado 🔴"
    }
  ];

  return (
    <section className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-4xl font-bold mb-4 text-white text-center">Cursos en la plataforma Udemy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((curso, index) => (
          <div key={index} className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4 text-center hover:bg-lime-700">
            <h3 className="text-xl font-semibold text-white mb-2">{curso.name}</h3>
            <Image
              src={curso.image}
              alt={curso.name}
              width={500}
              height={500}
              className="rounded-lg mx-auto"
            />
            <p className="text-white-300 mt-2 text-justify">{curso.estado}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbyData;