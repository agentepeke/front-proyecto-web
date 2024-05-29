import React from 'react';
import Image from 'next/image';

const HobbyData: React.FC = () => {
  const hobbies = [
    {
      name: "Programación",
      image: "/img/hobby/programacion.jpg",
      description: "Desde que entre a la universidad me di cuenta que como ingenieros en informatica y sistemas siempre debemos de estar enterado sobre todas las novedades en el mundo de la programacion, por eso siempre estoy aprendiendo nuevas tecnologias y lenguajes de programacion, esa es la razon por la que tome como hobby la programacion."
    },
    {
      name: "Videojuegos",
      image: "/img/hobby/videojuegos.jpg",
      description: "Los videojuegos desde pequeño ma han apacionado, junto a mi hermano estos han sido una de las cosas que mas nos ha unido, siempre estamos jugando juntos y compartiendo nuestras experiencias en los videojuegos, ahora tambien juego con mis amigos de la univerdad con los que tambien me divierto mucho."
    },
    {
      name: "Cine",
      image: "/img/hobby/cine.jpg",
      description: "El cine siempre ha sido unos de mis pasatiempos mas grandes ya que desde pequeño con mis padre íbamos muy seguido al cine o mirabamos peliculas en la televisión por las noches. Mi saga de peliculas favorita es Star wars, siempre me ha gustado la ciencia ficcion y la fantasia."
    },
    {
      name: "Deportes",
      image: "/img/hobby/futbol.jpg",
      description: "El futbol siempre ha sido mi deporte favorito, me gusta jugarlo y se que los ingenieros en informatica y sistemas llevamos una vida muy sedentaria por eso siempre trato de hacer deporte para mantenerme en forma y saludable. Ademas de futbol tambien me gusta jugar basquetbol y voleibol."
    }
  ];

  return (
    <section className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-4xl font-bold mb-4 text-white text-center">Pasatiempos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4 text-center hover:bg-lime-700">
            <h3 className="text-xl font-bold text-white mb-2">{hobby.name}</h3>
            <Image
              src={hobby.image}
              alt={hobby.name}
              width={500}
              height={500}
              className="rounded-lg mx-auto"
            />
            <p className="text-white-300 mt-2 text-justify">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbyData;