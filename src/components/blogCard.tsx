import Link from "next/link";

interface Props{
    id:number;
    title:string;
    description:string;
    creationDate:string;
}

export  default function BlogCard({id, title, description, creationDate}: Props) {
    return (
        <div className="block w-full sm:w-1/2 h-auto bg-lime-500 shadow-lg rounded-xl overflow-hidden px-5 py-5 my-10 mx-10 hover:bg-lime-700">
        <div className="bg-gray-200 rounded-lg flex flex-col sm:flex-row items-center justify-between px-6 py-3">
          <h1 className="text-xl font-bold text-gray-700 text-center sm:text-left">{`${title}`}</h1>
        </div>
        <div className="items-center px-6 py-4 text-center sm:text-left">
          <p className="text-sm text-white-600">Publicado: {`${creationDate}`}</p>
        </div>
        <Link href={`/blog/${id}`} className="block w-full sm:w-auto px-5 bg-gray-900 text-xl font-bold text-center py-2 rounded-lg hover:bg-lime-500">
          Leer mas
        </Link>
      </div>
    )
}