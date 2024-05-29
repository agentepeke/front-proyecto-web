import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion"
import SkillsSection from "@/components/skillsData";
import FerCard from "@/components/ferCard";
import HobbyData from "@/components/hobbyData";
import ConviteCard from "@/components/conviteData";


export default async function AboutMe() {
    return (
      <main>
        <div className=" min-h-screen py-8 px-4 sm:px-8">    
          <section className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8">
          <FerCard />
        </section>
        <SkillsSection />
         <HobbyData />
         <ConviteCard />
        </div>
        </main>
    );
}