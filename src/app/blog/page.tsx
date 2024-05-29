import React from "react";
import { parsedEnv } from "../../../env";
import axios from "axios";
import BlogCard from "@/components/blogCard";
import Link from "next/link";

interface Blog {
    id: number;
    title: string;
    description: string;
    creationDate: string;
}

export default async function blog() {
    const response = await axios.get<Blog[]>(`${parsedEnv.API_URL}/blog`);
    return (
        <main>
        <h1 className="bg-lime-500 text-3xl font-bold text-center tracking-tight text-white sm:text-6xl mt-10">Bienvenido a mi Blog, en donde hablaremos de tecnologia</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto justify-items-center">
        {
          response.data.map(blog=> (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              creationDate={blog.creationDate}/>
          ))
        }
      </ul>
      </main>
    );
}