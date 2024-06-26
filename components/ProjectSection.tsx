import Project from "./Project";

const projects = [
  {
    title: "Reviews Application",
    image: "/images/reviews_tall.png",
    description:
      "Full-stack reviews application allowing you to review any place, which integrates the google maps API. Built using Django and Bootstrap and deployed through Heroku.",
    skillList: [
      "Python",
      "Django",
      "Bootstrap CSS",
      "Heroku",
      "Google Maps API",
    ],
    id: 1,
    link: "https://project-b-23-2023-288292ef658c.herokuapp.com/reviews/profile/",
  },
  {
    title: "Wordle GUI",
    image: "/images/wordle_tall.png",
    description: "Fully functional Wordle-Clone built with Java and JavaFX",
    skillList: ["Java", "JavaFX", "Gradle"],
    id: 2,
  },
  {
    title: "Course Review Application",
    image: "/images/write_review.png",
    description:
      "Course-Review application built using Java, JavaFX and SQLite",
    skillList: ["Java", "JavaFX", "SQLite", "Gradle"],
    id: 3,
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
