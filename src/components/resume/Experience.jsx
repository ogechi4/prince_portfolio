import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont  flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-purple-500 tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Developer"
            subTitle="Rolantek - (2024 - Present)"
            result="Nigeria"
             des="Succesfully transitioned from a beginner to an intermediate front-end developer, 
             continuously refining my skills and portfolio"
        
          />
          <ResumeCard
            title="Software Development Intern"
            subTitle="ALX-Online - (2023 - 2024)"
            result="Online"
            des="Completed a comprehensive introductory software development program covering fundamental concepts and best practices"
            
            
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Self-Development - (2022 - 2023)"
            result="Online"
           des="Acquired proficiency in HTML,CSS, Javascript,REACT,TAILWIND"

       
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-purple-500 tracking-[4px]">2017 - 2023</p>
          <h2 className="text-4xl font-bold">Other Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Steam Production Intern"
            subTitle="Port-Harcourt Refinery (NNPC) (2015 - 2020)"
            result="Nigeria"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="Self-Online-Institution (2022 - 2024)"
            result="Online"
            des="Self Organized training for interested students"
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Flora Schools (2023)"
            result="Lagos"
            des="Physics and Mathematics Instructor"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
