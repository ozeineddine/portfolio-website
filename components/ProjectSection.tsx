import Project from "./Project";

const projects = [
  {
    title: "Wordle GUI",
    image: "/images/wordle_tall.png",
    description: "Fully functional Wordle-Clone built with Java and JavaFX",
    skillList: ["Java", "JavaFX", "Gradle"],
    id: 1,
  },
  {
    title: "Course Review Application",
    image: "/images/write_review.png",
    description: "Course-Review application built using Java, JavaFX and SQLite",
    skillList: ["Java, JavaFX, SQLite, Gradle"],
    id: 2
  },
];
const ProjectSection = () => {
  return (
    <div className="px-20 flex flex-row flex-wrap gap-6 mt-5 items-center justify-center">
      {projects.map((project) => (
        <Project key={project.id} projectObject={project} />
      ))}
    </div>
  );
};

export default ProjectSection;
