// "use client";
// import React,{ useState, useRef }  from 'react'
// import ProjectCard from './ProjectCard';
// import ProjectTag from './ProjectTag'
// import {motion, useInView} from "framer-motion";



// const projectsData = [
//     {
//         id:1,
//         title:"name of project 1",
//         description:"Project 1 description",
//         image:"/images/projects/1.png",
//         name: ["All", "Web"],
//         gitUrl:"/",
//         previewUrl:"/",
//     },
//     {
//         id:2,
//         title:"name of project 2",
//         description:"Project 2 description",
//         image: "/images/projects/2.png",
//         name:["All", "Web"],
//         gitUrl:"/",
//         previewUrl:"/",
//     },
//     {
//         id:3,
//         title: "name of 3rd project",
//         description:"project 3 description",
//         image: "/images/projects/3.png",
//         name:["All", "Web"],
//         gitUrl:"/",
//         previewUrl:"/",
//     },
//     {
//         id:4,
//         title:"name of 4th project",
//         description:"project 4 description",
//         image:"/images/projects/4.png",
//         name:["All", "Web"], 
//         gitUrl:"/",
//         previewUrl:"/", 
//     },
//     {
//         id:5,
//         title:"name of 5th project",
//         description:"project 5 description",
//         image: "/images/projects/5.png",
//         name:["All", "Web"],
//         gitUrl:"/",
//         previewUrl:"/",
//     },
//     {
//         id:6,
//         title:"name of 6th project",
//         description: "project 6 description",
//         image: "/images/projects/6.png",
//         name:["All", "Web"],
//         gitUrl:"/",
//         previewUrl:"/",
//     },
// ];

// const ProjectsSection = () =>{
//     const [tag, setTag] = useState("All");
//     const ref = useRef(null);
//     const isInView = useInView(ref, {once: true});

//     const handleTagChange = (newTag) => {
//         setTag(newTag);
//     };

//     const filteredProjects = projectsData.filter((project) => 
//         project.name.includes(tag)
//     );

//     const cardVariants = {
//         initial: {y: 50, opacity: 0},
//         animate: {y:0, opacity: 1},
//     };

//     return (
//         <section>
//             <h2>
//                 My Projects
//             </h2>
//             <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
//               <ProjectTag
//                 onClick={handleTagChange}
//                 tag="All"
//                 isSelected={tag === "All"}
//                 />
//             <ProjectTag
//                 onClick={handleTagChange}
//                 tag="Web"
//                 isSelected={tag === "Web"}
//                 />
//             <ProjectTag
//                 onClick={handleTagChange}
//                 tag="Mobile"
//                 isSelected={tag === "Mobile"}
//                 />

//             </div>
//             <ul>
//                 {filteredProjects.map((project, index) =>(
//                     <motion.li 
//                     key={index} 
//                     variants={cardVariants} 
//                     initial="initial" 
//                     animate={isInView ? "animate":"initial"}
//                     transition={{duration:0.3, delay:index * 0.4}}>
//                     <ProjectCard 
//                         key={project.id} 
//                         title={project.title} 
//                         description={project.description} 
//                         imgUrl={project.image}
//                         gitUrl={project.gitUrl}
//                         previewUrl={project.previewUrl}
//                     /> 
//                     </motion.li>
//                 ))}
//             </ul>
//         </section>
//     );
// };

// export default ProjectsSection;

"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
                id:1,
                title:"Expense App",
                description:"Track all of your expenses",
                image: "/projects/expense-app.png",
                name: ["All", "Web"],
                gitUrl:"https://github.com/adimond24/expense-app",
                previewUrl:"/",
            },
            {
                id:2,
                title:"Firebase Notes",
                description:"keep track of all the tasks you need to complete",
                image:"/projects/Firebase-notes.png",
                name:["All", "Web"],
                gitUrl:"https://github.com/adimond24/firebase-notes-app",
                previewUrl:"/",
            },
            {
                id:3,
                title: "name of 3rd project",
                description:"project 3 description",
                image: "/images/projects/3.png",
                name:["All", "Web"],
                gitUrl:"/",
                previewUrl:"/",
            },
            {
                id:4,
                title:"name of 4th project",
                description:"project 4 description",
                image:"/images/projects/4.png",
                name:["All", "Web"], 
                gitUrl:"/",
                previewUrl:"/", 
            },
            {
                id:5,
                title:"name of 5th project",
                description:"project 5 description",
                image: "/images/projects/5.png",
                name:["All", "Web"],
                gitUrl:"/",
                previewUrl:"/",
            },
            {
                id:6,
                title:"name of 6th project",
                description: "project 6 description",
                image: "/images/projects/6.png",
                name:["All", "Web"],
                gitUrl:"/",
                previewUrl:"/",
            },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.name.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section ref={ref}>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul>
                {filteredProjects.map((project) => (
                    <motion.li
                        key={project.id}  // Use project.id for better performance
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: project.id * 0.4 }}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
