"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Html</li>
                <li>Css</li>
                <li>React.js</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content: (
            <ul className="list-disc pl-2">
                <li>High School Graduate with 2 years of college done in high school</li>
                <li>Tooele Technical college Software Development Program</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id: "certifications", 
        content: (
            <ul className="list-disc pl-2">
                <li>Tooele Technical College Software Development Certificate</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return( 
    <section className="text-white"> 
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            <Image src="/public/about-image.png" width={500} height={500}/> 
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
               <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
               <p className="text-base lg:text-lg">
                    Hi I am a software developer and looking for new opportunities, I am a good team player
                    and take advice from others and use it to improve my projects. I am a life long learner.
                </p> 
               <div className="flex flex-row justify-start mt-8">
                <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    > 
                    {""}
                    Skills {""}
                </TabButton>
                
                <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}
                    > 
                    {""}
                    Education {""}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange("certifications")} 
                    active={tab === "certifications"}
                    > 
                    {""}
                    Certifications{""}
                </TabButton>
                
                
               </div>
               <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
        </section>
    )
};

export default AboutSection;