import Image from "next/image";

// title on top, picture on left, description on right, tech stack skills under
const Project = ({ projectObject }: { projectObject: any }) => {
  return (
    <div>
        <p className="section_subtitle">{projectObject.title}</p>
    <div
      className="projectBox"
      style={{ backgroundImage: `url(${projectObject.image})` }}
    >
      <div className="projectContent">
        
          <div className="projectDescriptionBox">
            {projectObject.description}
          </div>
        <div className="flex justify-center">
          {projectObject.skillList.map((skill: string, index: number) => (
            <span key={index} className="skill mx-1">
              {skill}
            </span>
          ))}
        </div>
    </div>
    </div>
    </div>
  );
};

export default Project;
