import Image from 'next/image';

interface Skill {
    name: string;
    image: string;
  }
  
  const skillsData: Skill[] = [
    {
      name: "HTML5",
      image: "/img/iconos/html-5.png", 
    },
    {
      name: "CSS3",
      image: "/img/iconos/css-3.png", 
    },
    {
      name: "JavaScript",
      image: "/img/iconos/js.png", 
    },
    {
      name: "Python",
      image: "/img/iconos/python.png", 
    },
    {
      name: "React.js",
      image: "/img/iconos/react.png", 
    },
    {
        name: "Laravel",
        image: "/img/iconos/laravel.png", 
      }
  ];
  
  const SkillsSection: React.FC = () => {
    return (
      <section className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 mt-8 ">
        <h2 className="text-4xl font-bold mb-4 text-white text-center">Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4 text-center hover:bg-lime-700">
              <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
              <Image src={skill.image} alt={`${skill.name} image`} width={100} height={100} className="mx-auto mb-2" />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SkillsSection;