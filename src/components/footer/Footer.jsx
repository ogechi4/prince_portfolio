
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { prince } from '../../assets/index';

const Footer = () => {
  return (
    <div className="w-full py-8 border-b-[1px] border-b-black flex flex-col items-center justify-center gap-5">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src={prince}
        alt="Princewill Manugbor"
      />

      <div className="flex items-center justify-center gap-4">
        <span className="bannerIcon">
          <FaFacebookF />
        </span>
        <span className="bannerIcon">
          <FaTwitter />
        </span>
        <span className="bannerIcon">
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  );
}

export default Footer
