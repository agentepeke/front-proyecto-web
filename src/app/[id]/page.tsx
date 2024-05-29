import FooterPro from "@/components/footerPro";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";


interface Props {
    params: {
        id: number;
    }
}

interface Project {
    id: number;
    title: string;
    description: string;
    creationDate: string;
    imagen: string;
    gitlink: string;
}


export default async function ProjectProfile({ params }: Props) {

    const { data: project } = await axios.get<Project>(process.env.API_URL + `/project/${params.id}`);
    return (
        <main className=" bg-lime-500 bg-opacity-60 grid grid-rows-[auto,auto,1fr,auto,auto] md:grid-cols-[1fr,1fr] grid-cols-1 min-h-screen gap-4">
        <h1 className="text-5xl font-bold col-start-1 col-end-2 md:col-end-3 row-start-2 row-end-3 text-center mx-10">
          {`${project?.title}`}
        </h1>
        <div className="bg-gray-900 rounded-lg col-start-1 col-end-2 row-start-3 row-end-4 md:col-end-2 px-5 py-12 mx-5">
        <h2 className="text-3xl text-justify col-start-1">
          {`${project?.description}`}
        </h2>
        <h4 className="text-3xl text-lime-900 my-2">{`Fecha que se realizo el proyecto: ${project?.creationDate}`}</h4>
        <Link href={`${project?.gitlink}`} className="hover:text-lime-500">
            Ver el proyecto en GitHub
          </Link>
        </div>
        <Image
          src={`${project?.imagen}`}
          alt="Imagen del proyecto"
          className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-4 md:row-start-3 md:row-end-4 px-5 pt-15 py-10"
          width={1000}
          height={100}
          priority
        />
         
        </main>
    );
}

