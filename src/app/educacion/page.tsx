import UrlXelaCard from "@/components/cardURLXela";
import CursosData from "@/components/cursosData";
import React from "react";
export default async function educacion() {
    return (
        <main>
        <h1 className="bg-lime-500 py-5 text-3xl font-bold text-center tracking-tight text-white sm:text-6xl mt-10">Aqui te hablaré sobre mi carrera universitaria y cursos online extras.</h1>
        <UrlXelaCard />
        <CursosData />
        </main>
    );
}