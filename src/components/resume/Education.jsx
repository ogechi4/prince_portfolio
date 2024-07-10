import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-purple-500 tracking-[4px]">2006 - 2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Physics Electronics"
            subTitle="F.U.T.O, Nigeria. (20014 - 2019)"
            result="Nigeria"
           des="Higher education is tertiary education leading to award of an academic degree. Higher education,"
              />
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          /> */}
          <ResumeCard
            title="Secondary School Education"
            subTitle="C.S.S Ogan-Ama,Rivers,Nigeria (2006 - 2013)"
            result="Nigeria"
           des="secondary school Education leading to award of an academic degree. (WAEC)"
            
          />

           <ResumeCard
            title="Primary School Education"
            subTitle="St. Morris,International School (2001 -2006)"
            result="Nigeria"
           des="Acquired my First School Leaving Certificate"
            
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-purple-500 tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
    </motion.div>
  );
}

export default Education