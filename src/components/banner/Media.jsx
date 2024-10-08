import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100082148984915" target="_blank" rel="noopener noreferrer" className="bannerIcon">
             <FaFacebookF />
           </a>
           <a href="https://www.instagram.com/princewill_ogechi?igsh=eTlmNmxtOWxuNG9n" target="_blank" rel="noopener noreferrer" className="bannerIcon">
             <FaInstagram />
           </a>
           <a href="https://x.com/ogechimanu521?t=mebqETTVnaycxEcRyL3FNA&s=09" target="_blank" rel="noopener noreferrer" className="bannerIcon">
             <FaTwitter />
           </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            
          </div>
        </div>
      </div>
  )
}

export default Media