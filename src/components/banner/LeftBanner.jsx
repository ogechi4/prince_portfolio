import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Front End Developer.", "UI Designer."],
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
          I am a passionate and dedicated web developer based in Lagos, Nigeria. With a strong love for all things tech and 
          creative mindset, I bring a unique approach to every project I undertake. My journey as web developer started with a curiosity to unravel
          the magic behind the websites I admired over the years, this curiosity evolved into a deep passion, leading me to explore various program languages
          and frameworks.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner