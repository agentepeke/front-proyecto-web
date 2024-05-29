import Image from 'next/image';

const FerCard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-4xl font-bold text-center tracking-tight text-white sm:text-6xl mt-10">Fernando Quiñonez</h2>
        <div className="flex flex-col lg:flex-row lg:items-start mt-8">
          <Image
            src="/img/imgfer.jpg"
            alt="Mi foto de perfil"
            width={300}
            height={200}
            className="rounded-full mx-auto lg:mx-5 shadow-2xl"
          />
          <p className="shadow-2xl mt-5 pt-12 text-2xl text-justify leading-8 text-gray-300 lg:mt-0 lg:ml-6">
          Hola, soy Fernando Quiñonez. Tengo 23 años y actualmente curso el noveno semestre de Ingeniería en Informática y Sistemas en la Universidad Rafael Landívar en Quetzaltenango. Me apasiona la programación y las bases de datos, campos en los que he dedicado gran parte de mi tiempo y esfuerzo para desarrollarme profesionalmente. Bienvenidos a mi página web. Aquí encontrarán mis proyectos más importantes, información sobre mí y una pequeña sección de blogs donde escribo sobre tecnología. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default FerCard;
