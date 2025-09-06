import Skill from "./Skill";

const skills: string[] = [
  "Python",
  "Javascript",
  "HTML/CSS",
  "Swift",
  "SwiftUI",
  "Firebase",
  "Django",
  "Bootstrap",
  "Java",
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
