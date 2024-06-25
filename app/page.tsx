import Image from "next/image";
import Link from "next/link";
import ChangingText from "@components/ChangingText";

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
            Hi, I'm Omar Zeineddine
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

        <div className="px-20 flex flex-row items-center space-x-10 my-6">
          <div className="flex flex-col items-start">
            <p className="section_subtitle">Who am I?</p>
            <p>Hey there! My name is Omar Zeineddine. I am currently a 4th-year student at the University of Virginia, majoring in computer science and minoring in data science.</p>
          </div>
          <div>Here are my skills. </div>
        </div>
      </section>

      {/* Section 3: Experience */}
      <section id="experience" className="w-full0">
        <div className="flex flex-col items-center">
          <h1 className="section_title flex flex-col items-center section_title">
            Experience
            <span className="divider"></span>
          </h1>
        </div>
      </section>

      {/* Section 4:  Projects*/}
      <section id="projects" className="w-full">
        <div className="flex flex-col items-center">
          <h1 className="section_title flex flex-col items-center section_title">
            Projects
            <span className="divider"></span>
          </h1>
        </div>
      </section>
    </main>
  );
}
