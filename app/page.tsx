import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

    {/* Section 1: Home*/}
    <section id="home" className="flex-min-screen-center">
      <h1> Home Section</h1>
      <h2> </h2>
    </section>

    {/* Section 2: About */}
    <section id="about" className="flex-min-screen-center">
      <h1> About part </h1>
    </section>

     {/* Section 3: Experience */}
     <section id="experience" className="flex-min-screen-center">
      <h1> Experience </h1>
    </section>

    {/* Section 4:  Projects*/}
    <section id="projects" className="flex-min-screen-center">
      <h1> Projects section </h1>
    </section>

   
    
    </main>
  );
}
