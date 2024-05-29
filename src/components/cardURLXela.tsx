import Image from 'next/image';

const UrlXelaCard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-xl font-bold text-center tracking-tight text-white sm:text-4xl mt-10">Universidad Rafel Landivar Campus Quetzaltenango</h2>
        <div className="flex flex-col lg:flex-row lg:items-start mt-8">
          <Image
            src="/img/landivar.png"
            alt="URL Xela"
            width={500}
            height={500}
            className=" rounded-full mx-auto lg:mx-5 shadow-2xl"
          />
          <p className="shadow-2xl mt- pt-20 text-lg text-justify leading-8 text-gray-300 lg:mt-0 lg:ml-6">
          Estudio Ingeniería en Informática y Sistemas en la Universidad Rafael Landívar en Quetzaltenango. Desde pequeño, me ha gustado mucho la tecnología, lo que me llevó a elegir esta carrera que me apasiona profundamente. Me permite entender y crear soluciones tecnológicas que pueden transformar la vida de las personas y las organizaciones. Además de mis estudios universitarios, participo en varios cursos en línea en la plataforma Udemy. Me encanta ser autodidacta y siempre busco nuevas oportunidades para aprender y mejorar mis habilidades en programación y bases de datos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrlXelaCard;
