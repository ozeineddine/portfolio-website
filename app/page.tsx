import Image from "next/image";
import Link from "next/link";
import Skill from "@components/Skill";
import SkillsSection from "@components/SkillsSection";
import ChangingText from "@components/ChangingText";
import Project from "@components/Project";
import ProjectSection from "@components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between space-y-24">
      {/* Section 1: Home*/}
      <section
        id="home"
        className=" flex flex-col w-full bg-majorelle-blue text-alabaster"
      >
        <div className="container mx-auto flex flex-col items-center justify-center space-y-12">
          <h1
            id="color_"
            className=" font-montserrat text-alabaster text-7xl pt-48 pl-20"
          >
            Hi! I'm Omar Zeineddine
          </h1>
          <div className="flex flex-row items-center">
            <h1 className="font-montserrat pl-24 text-5xl text-alabaster">
              {" "}
              I am a ...
            </h1>
            <ChangingText />
          </div>
          <Link href="#projects">
            <button className="font-montserrat bg-majorelle-blue border-4 rounded text-alabaster font-bold py-3 px-8 hover:scale-110">
              PROJECTS
            </button>
          </Link>
        </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="flex flex-col items-center section_title">
            About <span className="divider"></span>
          </h1>
        </div>

        <div className=" px-20 space-x-10 flex flex-row items-start my-6">
          <div className="flex flex-col items-start space-y-5">
            <p className="section_subtitle self-center">Who am I?</p>
            <p className="p1">
              Hey there! My name is Omar Zeineddine. I am currently a 4th-year
              student at the University of Virginia, majoring in computer
              science and minoring in data science.
            </p>
            <p className="p1">
              I am a currently a software engineer intern lead, working with new
              interns to guide them through their tasks as I work through my
              own.
            </p>
            <p className="p1">
              I love developing projects on the side as well. My current project
              in-progress involves creating a mobile app to track your
              experiences with a map!
            </p>
            <p className="p1">
              When I am not coding, I am either planning out my next trip, going
              on a hike, or at the gym!
            </p>
          </div>
          <div className="self-start flex flex-col justify-start">
            <p className="section_subtitle">Skills</p>
            <SkillsSection />
          </div>
        </div>
      </section>

      {/* Section 3:  Projects*/}
      <section id="projects" className="w-full">
        <div className="flex flex-col items-center">
          <h1 className="section_title flex flex-col items-center section_title">
            Projects
            <span className="divider"></span>
          </h1>
        </div>
        <ProjectSection/>

      </section>

      {/* Section 4: Contact */}
      <section id="contact" className="w-full0">
        <div className="flex flex-col items-center">
          <h1 className="section_title flex flex-col items-center section_title">
            Contact
            <span className="divider"></span>
          </h1>
        </div>
      </section>
    </main>
  );
}
