import Skill from "./Skill";

const skills: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Tailwind",
  "Python",
  "Django",
  "Bootstrap CSS",
  "Java",
  "JavaFX",
  "PHP",
];
const SkillsSection = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
      {skills.map((skill, index) => (
        <Skill key={index} name={skill} />
      ))}
    </div>
  );
};

export default SkillsSection;
