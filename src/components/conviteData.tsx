import Image from 'next/image';

const ConviteCard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 "> 
      <div className="mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold text-center tracking-tight text-white sm:text-4xl mt-10">
          Convite
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-start mt-8">
          <div className="flex justify-center">
            <Image
              src="/img/convite/convite1.jpg"
              alt="convite 1"
              width={500}
              height={500}
              className="rounded-full mx-5 lg:mx-5 shadow-2xl"
            />
          </div>
          <div className="flex-grow shadow-2xl mx-5 mt-6 pt-7 text-justify text-lg leading-8 text-gray-300 lg:mt-0 lg:ml-6">
            <p>
              Soy de Chichicastenago el Quiche, un municipio lleno de cultura y tradiciones, mi familia tiene ha tenido la tradicion de participar en el Convite Centenario 8 de diciembre que es patrimonio intangible de la nacion,  el convite es un baile que se realiza en las calles del municipio en donde sus integantes van disfrazados de personajes de peliculas, caricaturas, personajes de la vida real, Etc. Esto para darle un show de alegria al pueblo.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/img/convite/convite2.jpg"
              alt="convite 2"
              width={500}
              height={500}
              className="rounded-full mx-5 lg:mx-5 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConviteCard;