import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Engineer.", "Front End Developer.", "Backend Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 b-green-500">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-purple-500 capitalize">Ogechi P.</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="purple"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
         I am a passionate and dedicated Software Engineer based in Lagos,
          Nigeria, with a strong interest in technology, problem-solving, and
           building innovative software solutions. My journey into software 
           engineering began with a curiosity about how digital systems work and
            how technology can solve real-world problems. This curiosity has
             evolved into a deep passion for designing, developing, and maintaining efficient, scalable, and user-friendly applications using modern programming languages, frameworks, and development tools.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner