import FooterPro from "@/components/footerPro";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";


interface Props {
    params: {
        id: number;
    }
}

interface Blog {
    id: number;
    title: string;
    description: string;
    creationDate: string;
    imagen: string;
}


export default async function BlogInfo({ params }: Props) {

    const { data: blog } = await axios.get<Blog>(process.env.API_URL + `/blog/${params.id}`);
    const p = blog?.description.split("\n");
    return (
        <main className="bg-lime-500 bg-opacity-60 min-h-screen flex flex-col justify-center items-center gap-4">
  <h1 className="text-3xl font-bold text-center tracking-tight text-white sm:text-6xl mt-10">
    {`${blog?.title}`}
  </h1>
  <Image
          src={`${blog?.imagen}`}
          alt="Imagen del proyecto"
          className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-4 md:row-start-3 md:row-end-4 px-5 py-10"
          width={1000}
          height={100}
          priority
        />
  <div className="px-5 py-10 text-justify">
    <h2 className="text-xl bg-gray-900 px-10 py-10 rounded-lg">
      {p?.map((item,index) => {
        return <p key={index}>{item}</p>
      })}
    </h2>
    <h4>{`Fecha que se posteo el blog: ${blog?.creationDate}`}</h4>
  </div>
</main>
    );
}