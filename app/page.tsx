import Image from "next/image";
import ChangingText from "@components/ChangingText";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between space-y-24">
      {/* Section 1: Home*/}
      <section
        id="home"
        className=" flex flex-col w-full bg-majorelle-blue text-white"
      >
        <div className="container mx-auto flex flex-col items-center justify-center space-y-10">
          <h1 className=" font-montserrat text-white text-7xl pt-48 pl-20">
            Hi, I'm Omar Zeineddine
          </h1>
          <div className="flex flex-row items-center">
            <h1 className="font-montserrat pl-24 text-5xl"> I am a ...</h1>
            <ChangingText />
          </div>

        </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="w-full pl-20">
        <h1> About part </h1>
      </section>

      {/* Section 3: Experience */}
      <section id="experience" className="w-full pl-20">
        <h1> Experience </h1>
      </section>

      {/* Section 4:  Projects*/}
      <section id="projects" className="w-full pl-20">
        <h1> Projects section </h1>
      </section>
    </main>
  );
}
