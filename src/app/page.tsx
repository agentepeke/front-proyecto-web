import Header from "../components/headerPro";
import FooterPro from "@/components/footerPro";
import ProjectCard from "@/components/projectCard";
import axios from "axios";
import Image from 'next/image'
import { parsedEnv } from "../../env";
import FerCard from "@/components/ferCard";

interface Project {
  id: number;
  title: string;
  description: string;
  creationDate: string;
}

export default async function Home() {
  const response = await axios.get<Project[]>(`${parsedEnv.API_URL}/project`);
  return (
    <main>
    <div className="bg-lime-500 bg-opacity-60 relative isolate overflow-hidden py-8 sm:py-30">
      <FerCard />
    </div>
    <div>
      <h1 className="text-4xl text-center font-bold text-white-800">Proyectos FQ</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto justify-items-center">
        {
          response.data.map(project=> (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              creationDate={project.creationDate}/>
          ))
        }
      </ul>
    </div>
    </main>
  );
}