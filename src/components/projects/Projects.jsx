import React from 'react'
import Title from '../layouts/Title'
import { projectOne,  projectThree, eco, doct } from "../../assets/index";
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
          title="Health Care Managenment"
          des="A healthcare platform that streamlines patient registration, appointment scheduling, 
          and medical records, and learn to implement complex forms and SMS notification. "
          src={doct}
            link=' https://health-polaris.vercel.app/'
        />
        <ProjectsCard
          title="E-commerce Website (Users_Page)"
          des=" Full-Stack Ecommerce website with signIn/signUp authentication, redux-toolkit for the store and
          paystack payment integration "
          src={eco}
          link='https://paystack-ecommerce-front.vercel.app/'
        />
         <ProjectsCard
          title="E-commerce Website (Admin_Page)"
          des=" Full-Stack Ecommerce website with signIn/signUp authentication, redux-toolkit for the store and
          paystack payment integration "
          src={eco}
          link='https://paystack-ecommerce-adm.vercel.app/'
        />

         <ProjectsCard
          title="A RETAIL PRO (IN PROGRESS) "
          des="Currently building a retail management software that would be used by businesses to manage inventory, sales, customer relationships, suppliers, logistics and stor operations."
          src={projectThree}
          // link='https://standard-dashboard-git-main-princewill-ogechis-projects.vercel.app/'
        />
        <ProjectsCard
          title="Full Functional Dashboard"
          des="Full functional dashboard with signup and signin authentication, responsive
          and four different apps and functional maps present in the dashboard"
          src={projectThree}
          link='https://standard-dashboard-git-main-princewill-ogechis-projects.vercel.app/'
        />
        
      

        <ProjectsCard
          title="Image-Gallery"
          des=" The use of API to be able to fetch images with great UI design and a search button in order 
          get any image of your choice"
          src={projectOne}
          link=' https://ogechi4.github.io/Image-Search/'
        />
        <ProjectsCard
          title="School Management Web (IN PROGRESS)"
          des="A fully functional school management website that integrates a range of advanced features to 
          provide a seamless user experience."
          src={projectThree}
        />
       
      </div>
    </section>
  );
}

export default Projects