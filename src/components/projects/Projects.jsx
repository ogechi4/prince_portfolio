import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des=" Full anmazon clone websites with google aunthentication, redux-toolkit for the store and
          stripe payment "
          src={projectOne}
        />
        <ProjectsCard
          title="Full Functional Dashboard"
          des="Full functional dashboard withe signup and signi authentication, responsive
          and four different apps and functional maps present in the dashboard"
          src={projectThree}
        />
        <ProjectsCard
          title="Image-Gallery"
          des=" The use of API to be able to fetch images with great UI design and a search button in order 
          get any image of your choice"
          src={projectOne}
        />
        <ProjectsCard
          title="Image-Gallery"
          des=" The use of API to be able to fetch images with great UI design and a search button in order 
          get any image of your choice"
          src={projectOne}
        />
        <ProjectsCard
          title="Image-Gallery"
          des=" The use of API to be able to fetch images with great UI design and a search button in order 
          get any image of your choice"
          src={projectThree}
        />
        <ProjectsCard
          title="Food App"
          des="Food App built with React Native with login authentication and great UI design 
          with Tailwind
          "
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects