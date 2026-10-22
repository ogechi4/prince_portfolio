
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
        <div className="py-4 lgl:py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-4 lgl:mt-6 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6">
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
        </div>
      </div>
    </motion.div>
  );
}

export default Education
