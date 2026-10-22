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
          <p className="text-sm text-purple-500 tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
  title="Software Development Engineer / Instructor"
  subTitle="NIIT – Digital Fortress (2025–Present)"
  result="Lagos, Nigeria"
  des="Developed school CBT software, contributed to location-based staff attendance reporting, and currently building a multitenant School Management System. Teach full-stack development using React, JavaScript, Node.js, Express.js, MongoDB, SQL, Git, and GitHub."
/>

<ResumeCard
  title="Software Engineer (Frontend – Remote)"
  subTitle="Rolantek Energy Limited (2022–2025)"
  result="Lagos, Nigeria (Remote)"
  des="Contributed to the development of StorePro retail management software using React and Redux Toolkit. Built dynamic forms for product management, sales processing, and user accounts while integrating REST APIs and collaborating with backend developers."
/>

<ResumeCard
  title="Frontend Developer"
  subTitle="Smartware Solution Limited (2020–2021)"
  result="Ikeja, Lagos, Nigeria"
  des="Developed responsive, user-friendly web applications using React, Angular, HTML, CSS, JavaScript, and Tailwind CSS. Integrated REST APIs, debugged applications, and improved performance, code reusability, and scalability."
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
        
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
