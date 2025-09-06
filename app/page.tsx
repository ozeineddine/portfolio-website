import Image from "next/image";
import Link from "next/link";
import Skill from "@components/Skill";
import SkillsSection from "@components/SkillsSection";
import ChangingText from "@components/ChangingText";
import Project from "@components/Project";
import ProjectSection from "@components/ProjectSection";
import ContactForm from "@components/ContactForm";
import Footer from '@components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between space-y-24">
      {/* Section 1: Home*/}
      <section
        className="h-[505px] flex flex-col w-full bg-majorelle-blue text-alabaster"
      >
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8">
          <h1
            id="color_"
            className="text-center font-montserrat text-alabaster text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl pt-40"
          >
            Hi! I&#39;m Omar Zeineddine
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center">
            <ChangingText />
          </div>
          
        </div>
        <div className="flex flex-row items-center justify-center mt-4">
          <Link href="#projects">
            <button className="font-montserrat bg-majorelle-blue border-4 rounded text-alabaster font-bold py-3 px-8 hover:scale-110">
              PROJECTS
            </button>
          </Link>
          </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <h1 className="flex flex-col items-center section_title">
            About <span className="divider"></span>
          </h1>
        </div>

        <div className=" sm:px-20 px-4 space-y-4 space-x-4 flex flex-col sm:flex-row items-start">
          <div className="flex flex-col items-start space-y-5">
            <p className="section_subtitle self-center sm:self-center pr-2 sm:pr-0 sm:pl-4">Who am I?</p>
            <p className="p1 pl-8 text-left sm:text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Hey there! My name is Omar Zeineddine. I am a UVA alum (CO &#39;25) who majored in computer science and minored in data science.
            </p>
            <p className="p1 pl-8 text-left sm:text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              I love developing projects on the side as well. My current project is Vlogit, a social video app I&#39;m building for iOS with SwiftUI and Firebase!
              We&#39;ve reached 15,000+ users on the waitlist and counting!
            </p>
            <p className="p1 pl-8 text-left sm:text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
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
        <ContactForm/>
      </section>
    </main>
  );
}
